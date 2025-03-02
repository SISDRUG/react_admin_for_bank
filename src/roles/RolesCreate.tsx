import { Create, SimpleForm, NumberInput, TextInput } from "react-admin";

export const RolesCreate = () => {
  return (
    <Create resource="roles">
      <SimpleForm>
        <NumberInput source="id" />
        <TextInput source="role" />
      </SimpleForm>
    </Create>
  );
};
