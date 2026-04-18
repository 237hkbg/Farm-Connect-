import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiService } from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await apiService.auth.getSession();
      if (!error && data?.session) {
        setSession(data.session);
        setUser(data.session.user);
      }
      setLoading(false);
    };
    checkSession();
  }, []);

  const signUp = async ({ email, password }) => {
    const result = await apiService.auth.signUp({ email, password });
    if (!result.error) {
      setUser(result.data.user);
      setSession(result.data.session);
    }
    return result;
  };

  const signIn = async ({ email, password }) => {
    const result = await apiService.auth.signIn({ email, password });
    if (!result.error) {
      setUser(result.data.user);
      setSession(result.data.session);
    }
    return result;
  };

  const signOut = async () => {
    await apiService.auth.signOut();
    setUser(null);
    setSession(null);
    return { error: null };
  };

  const value = {
    user,
    session,
    signIn,
    signUp,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
