import { useContext } from "react";   
import { KeycloakContext } from "./keycloak-context";

export const useKeycloakAuth = () => useContext(KeycloakContext);