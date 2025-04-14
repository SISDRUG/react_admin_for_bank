import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  CustomRoutes,
} from "react-admin";
import {
  amplicodeDarkTheme,
  amplicodeLightTheme,
} from "./themes/amplicodeTheme/amplicodeTheme";
import { dataProvider } from "./dataProvider";
import { useCallback, useState, useRef, useEffect } from "react";
import { RolesCreate } from "./roles/RolesCreate";
import { BankAccountsCreate } from "./bankAccounts/BankAccountsCreate";
import { BankAccountsEdit } from "./bankAccounts/BankAccountsEdit";
import { BankAccountsShow } from "./bankAccounts/BankAccountsShow";
import { UsersCreate } from "./users/UsersCreate";
import { BankAccountsList } from "./bankAccounts/BankAccountsList";
import { RolesList } from "./roles/RolesList";
import { UsersList } from "./users/UsersList";
import { PackagesList } from "./packages/PackagesList";
import { OperationsList } from "./operations/OperationsList";
import { CurrenciesList } from "./currencies/CurrenciesList";
import { CredentialsList } from "./credentials/CredentialsList";
import { CardsList } from "./cards/CardsList";
import { LoginDetailsList } from "./loginDetails/LoginDetailsList";
import { Dashboard } from "./dashboard/Dashboard";
import { Route } from "react-router-dom";

// Иконки для категорий
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentIcon from '@mui/icons-material/Payment';
import SecurityIcon from '@mui/icons-material/Security';
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { OperationsCreate } from "./operations/OperationsCreate";
import { CredentialsCreate } from "./credentials/CredentialsCreate";
import Keycloak, { KeycloakInitOptions } from "keycloak-js";
import { keycloakClient, authProvider } from "./keycloakAuthProvider";

const initOptions: KeycloakInitOptions = { 
  onLoad: "login-required",
  pkceMethod: 'S256'
 };
export const App = () => {
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null);
  const initializingPromise = useRef<Promise<Keycloak>>();

  useEffect(() => {
    const initKeyCloakClient = async () => {
      try {
        await keycloakClient.init(initOptions);
        console.log("Keycloak initialized successfully");
        return keycloakClient;
      } catch (error) {
        console.error("Failed to initialize Keycloak:", error);
        throw error;
      }
    };

    if (!initializingPromise.current) {
      initializingPromise.current = initKeyCloakClient();
      initializingPromise.current
        .then((client) => setKeycloak(client))
        .catch((error) => console.error("Error setting Keycloak client:", error));
    }
  }, []); // Пустой массив зависимостей!

  if (!keycloak) return <p>Loading...</p>;

  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      lightTheme={amplicodeLightTheme}
      darkTheme={amplicodeDarkTheme}
      dashboard={Dashboard}
    >
      <CustomRoutes>
        <Route path="/" element={<Dashboard />} />
      </CustomRoutes>

      {/* Категория: Пользователи и роли */}
      <Resource
        name="users"
        icon={PeopleIcon}
        options={{ label: "Пользователи" }}
        edit={EditGuesser}
        list={UsersList}
        show={ShowGuesser}
        recordRepresentation="name"
        create={UsersCreate}
      />

      <Resource
        name="roles"
        icon={SettingsIcon}
        options={{ label: "Роли" }}
        edit={EditGuesser}
        list={RolesList}
        show={ShowGuesser}
        create={RolesCreate}
      />

      <Resource
        name="loginDetails"
        icon={SecurityIcon}
        options={{ label: "Логины" }}
        list={LoginDetailsList}
      />

      {/* Категория: Финансы */}
      <Resource
        name="bankAccounts"
        icon={AccountBalanceIcon}
        options={{ label: "Банковские счета" }}
        edit={BankAccountsEdit}
        list={BankAccountsList}
        show={BankAccountsShow}
        create={BankAccountsCreate}
      />

      <Resource
        name="cards"
        icon={PaymentIcon}
        options={{ label: "Карты" }}
        edit={EditGuesser}
        list={CardsList}
        show={ShowGuesser}
        recordRepresentation="holderName"
      />

      <Resource
        name="currencies"
        options={{ label: "Валюты" }}
        edit={EditGuesser}
        list={CurrenciesList}
        show={ShowGuesser}
      />

      <Resource
        name="operations"
        options={{ label: "Операции" }}
        edit={EditGuesser}
        list={OperationsList}
        show={ShowGuesser}
        create={OperationsCreate}
      />

      {/* Категория: Прочее */}
      <Resource
        name="packages"
        icon={LocalOfferIcon}
        options={{ label: "Пакеты" }}
        edit={EditGuesser}
        list={PackagesList}
        show={ShowGuesser}
        recordRepresentation="name"
      />

      <Resource
        name="credentials"
        icon={SecurityIcon}
        options={{ label: "Учетные данные" }}
        edit={EditGuesser}
        list={CredentialsList}
        show={ShowGuesser}
        create={CredentialsCreate}
      />
    </Admin>
  );
};
