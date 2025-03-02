import {
  List,
  Datagrid,
  NumberField,
  TextField,
  DateField,
  BooleanField,
  EditButton,
  DeleteButton,
} from "react-admin";

export const LoginDetailsList = () => {
  return (
    <List resource="loginDetails">
      <Datagrid rowClick="show">
        <NumberField source="id" />
        <TextField source="email" />
        <TextField source="password" />
        <DateField source="lastLoginDate" />
        <NumberField source="loginAttempts" />
        <NumberField source="userStatus" />
        <NumberField source="passwordHashSalt" />
        <BooleanField source="twoFactorAuthEnabled" />
        <>
          <EditButton />
          <DeleteButton />
        </>
      </Datagrid>
    </List>
  );
};
