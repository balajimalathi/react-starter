// components/AuthGuard.tsx
import { useKeycloakAuth } from "@/context/keycloak-auth";
import { Navigate, Outlet } from "react-router-dom"; 

export const AuthGuard = () => {
  const { isAuthenticated } = useKeycloakAuth();

  if (isAuthenticated === false) {
    return <Navigate to="/" replace />;
  }

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return <Outlet />;
};
