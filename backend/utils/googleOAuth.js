const { OAuth2Client } = require('google-auth-library');

const getClient = () => new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_CALLBACK_URL
);

const getAuthUrl = () => {
    const client = getClient();
    return client.generateAuthUrl({
        access_type: 'online',
        scope: ['openid', 'email', 'profile'],
        prompt: 'select_account',
    });
};

// Exchanges the authorization code for tokens, then verifies the ID token
// to get the user's verified Google profile.
const getGoogleProfile = async (code) => {
    const client = getClient();
    const { tokens } = await client.getToken(code);
    const ticket = await client.verifyIdToken({
        idToken: tokens.id_token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    return {
        googleId: payload.sub,
        email: payload.email,
        firstName: payload.given_name || '',
        lastName: payload.family_name || '',
        picture: payload.picture || null,
    };
};

module.exports = { getAuthUrl, getGoogleProfile };
