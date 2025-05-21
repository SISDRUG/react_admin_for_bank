import {
  Edit,
  SimpleForm,
  NumberInput,
  TextInput,
  DateInput,
  BooleanInput,
} from "react-admin";

export const LoginDetailsEdit = () => {
  return (
    <Edit resource="loginDetails">
      <SimpleForm>
        <NumberInput source="id" disabled />
        <TextInput source="email" />
        <TextInput source="password" />
        <DateInput source="lastLoginDate" />
        <NumberInput source="loginAttempts" />
        <NumberInput source="userStatus" />
        <NumberInput source="passwordHashSalt" />
        <BooleanInput source="twoFactorAuthEnabled" />
      </SimpleForm>
    </Edit>
  );
}; 