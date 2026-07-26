const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const request = async (path, options = {}) => {
    const res = await fetch(`${API_URL}${path}`, {
        credentials: 'include',
        headers: { 'Content-Type': 'application/json', ...options.headers },
        ...options,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
        const error = new Error(data.message || data.errors?.[0] || 'Request failed');
        error.code = data.code;
        error.errors = data.errors;
        error.status = res.status;
        throw error;
    }
    return data;
};

export const registerUser = (payload) =>
    request('/auth/register', { method: 'POST', body: JSON.stringify(payload) });

export const loginUser = (payload) =>
    request('/auth/login', { method: 'POST', body: JSON.stringify(payload) });

export const logoutUser = () =>
    request('/auth/logout', { method: 'POST' });

export const refreshSession = () =>
    request('/auth/refresh', { method: 'POST' });

export const forgotPassword = (email) =>
    request('/auth/forgot-password', { method: 'POST', body: JSON.stringify({ email }) });

export const resetPassword = (token, password) =>
    request('/auth/reset-password', { method: 'POST', body: JSON.stringify({ token, password }) });

export const verifyEmail = (token) =>
    request(`/auth/verify-email?token=${encodeURIComponent(token)}`);

export const googleLoginUrl = `${API_URL}/auth/google`;
