import { Create, SimpleForm, ReferenceInput, SelectInput } from "react-admin";

export const CredentialsCreate = () => {
    const handleSubmit = async (data: any) => {
        console.log("Data before sending:", data);
      }
  return (
    <Create resource="credentials">
      <SimpleForm >
        <ReferenceInput source="userId" reference="users" />
        <ReferenceInput source="loginDetailsId" reference="loginDetails">
            <SelectInput optionText="email" optionValue="id" />
        </ReferenceInput>
        <ReferenceInput source="roleId" reference="roles">
            <SelectInput optionText="role" optionValue="id" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
