import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const UsersCreate = () => {
    const handleSubmit = async (data: any) => {
        console.log("Data before sending:", data);
      }
  return (
    <Create resource="users">
      <SimpleForm >
        <TextInput source="name" />
        <TextInput source="surname" />
        <DateInput source="dateOfBirth"/>
        <TextInput source="contactPhone" />
        <TextInput source="address" />
        <BooleanInput source="isActive" />
        <BooleanInput source="verificationStatus" />
      </SimpleForm>
    </Create>
  );
};
