import Keycloak, { KeycloakConfig, KeycloakTokenParsed } from "keycloak-js";
import { httpClient, keycloakAuthProvider } from "ra-keycloak";

const keycloakUrl = import.meta.env.VITE_KC_URL as string;
const realmName = import.meta.env.VITE_KC_REALM_NAME as string;
const clientId = import.meta.env.VITE_KC_CLIENT_ID as string;

const keycloakConfig: KeycloakConfig = {
  // url: "http://localhost:9080/",
  url: 'http://172.20.10.2:9080',
  realm: "master",
  clientId: "admin-ui",
};

const extractPermissions = (decoded: KeycloakTokenParsed) => {
  // configure your custom permission extraction
  return decoded;
};

export const keycloakClient = new Keycloak(keycloakConfig);
export const keycloakHttpClient = httpClient(keycloakClient);
export const authProvider = keycloakAuthProvider(keycloakClient, {
  onPermissions: extractPermissions,
});

keycloakClient.onTokenExpired = async () => {
  const updated = await keycloakClient.updateToken(30);

  if (!updated) {
    authProvider.logout({});
  }
};
