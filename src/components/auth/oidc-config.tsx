// src/auth/oidcConfig.ts
import { AuthProviderProps } from "react-oidc-context";

export const oidcConfig: AuthProviderProps = {
  authority: "http://localhost:8080/realms/robin-realm",
  client_id: "robin-ui",
  redirect_uri: window.location.origin + "/auth/callback",
  silent_redirect_uri: window.location.origin + "/silent-renew",
  post_logout_redirect_uri: window.location.origin + "/",
  response_type: "code",
  scope: "openid profile email",
  loadUserInfo: true,
  automaticSilentRenew: true,
};
