const { User, sanitizeUser } = require('../models/userModel');
const { RefreshToken, UserToken } = require('../models/tokenModel');
const { hashPassword, comparePassword, isStrongPassword } = require('../utils/password');
const { signAccessToken } = require('../utils/jwt');
const { generateSecureToken, hashToken } = require('../utils/tokens');
const { sendMail } = require('../utils/mailer');
const { getAuthUrl, getGoogleProfile } = require('../utils/googleOAuth');

const REFRESH_COOKIE_NAME = 'refresh_token';
const REFRESH_TTL_DEFAULT_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
const REFRESH_TTL_REMEMBER_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const RESET_TOKEN_TTL_MS = 30 * 60 * 1000; // 30 minutes
const VERIFY_TOKEN_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

const isProd = process.env.NODE_ENV === 'production';

const cookieOptions = (maxAge) => ({
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? 'none' : 'lax',
    path: '/api/auth',
    ...(maxAge ? { maxAge } : {}), // omit => session cookie, cleared when the browser closes
});

const clearRefreshCookie = (res) => {
    res.clearCookie(REFRESH_COOKIE_NAME, { httpOnly: true, secure: isProd, sameSite: isProd ? 'none' : 'lax', path: '/api/auth' });
};

// Issues a fresh access token + rotates in a fresh refresh token (cookie + DB row).
const issueSession = async (res, user, { rememberMe = false, userAgent } = {}) => {
    const accessToken = signAccessToken(user);

    const refreshToken = generateSecureToken();
    const ttlMs = rememberMe ? REFRESH_TTL_REMEMBER_MS : REFRESH_TTL_DEFAULT_MS;

    await RefreshToken.create({
        userId: user.id,
        tokenHash: hashToken(refreshToken),
        expiresAt: new Date(Date.now() + ttlMs),
        rememberMe,
        userAgent,
    });

    res.cookie(REFRESH_COOKIE_NAME, refreshToken, cookieOptions(rememberMe ? ttlMs : undefined));
    return accessToken;
};

exports.register = async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, password } = req.body;

        if (await User.findByEmail(email)) {
            return res.status(409).json({ success: false, message: 'Email already registered' });
        }
        if (await User.findByEmailOrPhone(phoneNumber)) {
            return res.status(409).json({ success: false, message: 'Phone number already registered' });
        }

        const passwordHash = await hashPassword(password);
        const user = await User.create({ firstName, lastName, email, phoneNumber, passwordHash });

        const verifyToken = generateSecureToken();
        await UserToken.create({
            userId: user.id,
            tokenHash: hashToken(verifyToken),
            type: 'email_verification',
            expiresAt: new Date(Date.now() + VERIFY_TOKEN_TTL_MS),
        });
        await sendMail({
            to: user.email,
            subject: 'Verify your email',
            html: `Click to verify your email: ${process.env.FRONTEND_URL}/verify-email?token=${verifyToken}`,
        });

        const accessToken = await issueSession(res, user, { userAgent: req.headers['user-agent'] });
        res.status(201).json({ success: true, token: accessToken, user: sanitizeUser(user) });
    } catch (error) {
        if (error.code === '23505') {
            return res.status(409).json({ success: false, message: 'Email or phone number already registered' });
        }
        console.error('Register error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { identifier, password, rememberMe } = req.body;
        const user = await User.findByEmailOrPhone(identifier);

        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
        if (!user.password_hash) {
            return res.status(401).json({ success: false, message: 'This account uses Google sign-in. Please continue with Google.' });
        }

        const valid = await comparePassword(password, user.password_hash);
        if (!valid) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const accessToken = await issueSession(res, user, { rememberMe: !!rememberMe, userAgent: req.headers['user-agent'] });
        res.json({ success: true, token: accessToken, user: sanitizeUser(user) });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.googleAuth = (req, res) => {
    res.redirect(getAuthUrl());
};

exports.googleCallback = async (req, res) => {
    try {
        const { code } = req.query;
        if (!code) {
            return res.redirect(`${process.env.FRONTEND_URL}/login?error=google_failed`);
        }

        const profile = await getGoogleProfile(code);
        let user = await User.findByGoogleId(profile.googleId);

        if (!user) {
            const existingByEmail = await User.findByEmail(profile.email);
            user = existingByEmail
                ? await User.linkGoogleAccount(existingByEmail.id, profile.googleId, profile.picture)
                : await User.createFromGoogle({
                    firstName: profile.firstName,
                    lastName: profile.lastName,
                    email: profile.email,
                    googleId: profile.googleId,
                    profilePicture: profile.picture,
                });
        }

        await issueSession(res, user, { userAgent: req.headers['user-agent'] });
        res.redirect(process.env.FRONTEND_URL);
    } catch (error) {
        console.error('Google callback error:', error);
        res.redirect(`${process.env.FRONTEND_URL}/login?error=google_failed`);
    }
};

exports.refresh = async (req, res) => {
    try {
        const token = req.cookies?.[REFRESH_COOKIE_NAME];
        if (!token) {
            return res.status(401).json({ success: false, code: 'TOKEN_MISSING', message: 'No refresh token' });
        }

        const tokenHash = hashToken(token);
        const stored = await RefreshToken.findValidByHash(tokenHash);
        if (!stored) {
            clearRefreshCookie(res);
            return res.status(401).json({ success: false, code: 'TOKEN_INVALID', message: 'Invalid or expired session' });
        }

        const user = await User.findById(stored.user_id);
        if (!user) {
            clearRefreshCookie(res);
            return res.status(401).json({ success: false, code: 'TOKEN_INVALID', message: 'User not found' });
        }

        // Rotation: revoke the token just used, issue a brand new one
        await RefreshToken.revokeByHash(tokenHash);
        const accessToken = await issueSession(res, user, { rememberMe: stored.remember_me, userAgent: req.headers['user-agent'] });

        res.json({ success: true, token: accessToken, user: sanitizeUser(user) });
    } catch (error) {
        console.error('Refresh error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.logout = async (req, res) => {
    try {
        const token = req.cookies?.[REFRESH_COOKIE_NAME];
        if (token) {
            await RefreshToken.revokeByHash(hashToken(token));
        }
        clearRefreshCookie(res);
        res.json({ success: true, message: 'Logged out' });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const genericResponse = { success: true, message: 'If that email is registered, a reset link has been sent.' };

        if (!email) return res.json(genericResponse);

        const user = await User.findByEmail(email);
        if (user && user.password_hash) {
            const resetToken = generateSecureToken();
            await UserToken.create({
                userId: user.id,
                tokenHash: hashToken(resetToken),
                type: 'password_reset',
                expiresAt: new Date(Date.now() + RESET_TOKEN_TTL_MS),
            });
            await sendMail({
                to: user.email,
                subject: 'Reset your password',
                html: `Reset your password: ${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`,
            });
        }

        // Always return the same response, regardless of whether the account
        // exists — prevents attackers from using this endpoint to enumerate emails.
        res.json(genericResponse);
    } catch (error) {
        console.error('Forgot password error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const { token, password } = req.body;
        if (!token || !password) {
            return res.status(400).json({ success: false, message: 'Token and new password are required' });
        }
        if (!isStrongPassword(password)) {
            return res.status(400).json({ success: false, message: 'Password must be at least 8 characters and include uppercase, lowercase, a number, and a special character' });
        }

        const stored = await UserToken.findValid(hashToken(token), 'password_reset');
        if (!stored) {
            return res.status(400).json({ success: false, message: 'Invalid or expired reset token' });
        }

        const passwordHash = await hashPassword(password);
        await User.updatePassword(stored.user_id, passwordHash);
        await UserToken.markUsed(stored.id);
        await RefreshToken.revokeAllForUser(stored.user_id);

        res.json({ success: true, message: 'Password reset successfully' });
    } catch (error) {
        console.error('Reset password error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.verifyEmail = async (req, res) => {
    try {
        const { token } = req.query;
        if (!token) {
            return res.status(400).json({ success: false, message: 'Verification token is required' });
        }

        const stored = await UserToken.findValid(hashToken(token), 'email_verification');
        if (!stored) {
            return res.status(400).json({ success: false, message: 'Invalid or expired verification token' });
        }

        await User.markEmailVerified(stored.user_id);
        await UserToken.markUsed(stored.id);

        res.json({ success: true, message: 'Email verified' });
    } catch (error) {
        console.error('Verify email error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
