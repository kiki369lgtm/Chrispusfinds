import { useCallback, useEffect, useRef, useState } from "react";
import { registerUser, loginUser, logoutUser, refreshSession } from "../services/authApi";
import { AuthContext } from "./authContextInstance";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const accessTokenRef = useRef(null);

  const applySession = useCallback((data) => {
    accessTokenRef.current = data.token;
    setUser(data.user);
  }, []);

  const clearSession = useCallback(() => {
    accessTokenRef.current = null;
    setUser(null);
  }, []);

  useEffect(() => {
    refreshSession()
      .then((data) => {
        applySession(data);
        setLoading(false);
      })
      .catch(() => {
        clearSession();
        setLoading(false);
      });
  }, [applySession, clearSession]);

  const login = useCallback(async (payload) => {
    const data = await loginUser(payload);
    applySession(data);
    return data.user;
  }, [applySession]);

  const register = useCallback(async (payload) => {
    const data = await registerUser(payload);
    applySession(data);
    return data.user;
  }, [applySession]);

  const logout = useCallback(async () => {
    try {
      await logoutUser();
    } finally {
      clearSession();
    }
  }, [clearSession]);

  // Fetch wrapper for protected endpoints: attaches the access token and
  // silently refreshes-and-retries once on a 401 before giving up.
  const authFetch = useCallback(async (path, options = {}) => {
    const doFetch = () => fetch(`${API_URL}${path}`, {
      credentials: 'include',
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(accessTokenRef.current ? { Authorization: `Bearer ${accessTokenRef.current}` } : {}),
        ...options.headers,
      },
    });

    let res = await doFetch();
    if (res.status === 401) {
      try {
        const refreshed = await refreshSession();
        applySession(refreshed);
        res = await doFetch();
      } catch {
        clearSession();
      }
    }
    return res;
  }, [applySession, clearSession]);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, authFetch }}>
      {children}
    </AuthContext.Provider>
  );
};
