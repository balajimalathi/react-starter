interface KeycloakContextType {
  isAuthenticated: boolean | null;
  token: string | null;
}
 
// context/KeycloakContext.tsx
import React, { createContext, useEffect, useState } from "react";
import keycloak from "@/lib/keycloak";

export const KeycloakContext = createContext<KeycloakContextType>({
  isAuthenticated: false,
  token: null,
});

export const KeycloakProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    keycloak.init({ onLoad: "login-required" }).then((auth) => {
      setIsAuthenticated(auth);
      if (auth) {
        setToken(keycloak.token || null);
      }
    });
  }, []);

  return (
    <KeycloakContext.Provider value={{ isAuthenticated, token }}>
      {children}
    </KeycloakContext.Provider>
  );
}; 
