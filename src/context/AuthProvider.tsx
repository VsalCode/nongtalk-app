import React from 'react'
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setTokenState] = React.useState<string | null>(null);

  React.useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setTokenState(savedToken);
    }
  }, []);

  const setToken = (token: string | null) => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
    setTokenState(token);
  };

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
