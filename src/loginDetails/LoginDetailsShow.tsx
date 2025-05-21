import {
  Show,
  SimpleShowLayout,
  NumberField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const LoginDetailsShow = () => {
  return (
    <Show resource="loginDetails">
      <SimpleShowLayout>
        <NumberField source="id" />
        <TextField source="email" />
        <TextField source="password" />
        <DateField source="lastLoginDate" />
        <NumberField source="loginAttempts" />
        <NumberField source="userStatus" />
        <NumberField source="passwordHashSalt" />
        <BooleanField source="twoFactorAuthEnabled" />
      </SimpleShowLayout>
    </Show>
  );
}; 