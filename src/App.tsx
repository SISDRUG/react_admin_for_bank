import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import {
  amplicodeDarkTheme,
  amplicodeLightTheme,
} from "./themes/amplicodeTheme/amplicodeTheme";
import { dataProvider } from "./dataProvider";
import { useCallback, useState } from "react";
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

export const App = () => {

  const [key, setKey] = useState<undefined | null | string | number | bigint>();

  return (
    <Admin
      dataProvider={dataProvider}
      lightTheme={amplicodeLightTheme}
      darkTheme={amplicodeDarkTheme}
    >
      <Resource
        name="cards"
        edit={EditGuesser}
        list={CardsList}
        show={ShowGuesser}
        recordRepresentation="holderName"
      />

      <Resource
        name="credentials"
        edit={EditGuesser}
        list={CredentialsList}
        show={ShowGuesser}
      />

      <Resource
        name="currencies"
        edit={EditGuesser}
        list={CurrenciesList}
        show={ShowGuesser}
      />

      <Resource
        name="operations"
        edit={EditGuesser}
        list={OperationsList}
        show={ShowGuesser}
      />

      <Resource
        name="packages"
        edit={EditGuesser}
        list={PackagesList}
        show={ShowGuesser}
        recordRepresentation="name"
      />

      <Resource
        name="users"
        edit={EditGuesser}
        list={UsersList}
        show={ShowGuesser}
        recordRepresentation="name"
        create={UsersCreate}
      />

      <Resource
        name="bankAccounts"
        options={{ label: "Bank Accounts" }}
        edit={BankAccountsEdit}
        list={BankAccountsList}
        show={BankAccountsShow}
        create={BankAccountsCreate}
      />

      <Resource
        name="roles"
        edit={EditGuesser}
        list={RolesList}
        show={ShowGuesser}
        create={RolesCreate}
      />

      <Resource
        name="loginDetails"
        options={{ label: "Login Details" }}
        list={LoginDetailsList}
      />
    </Admin>
  );
};
