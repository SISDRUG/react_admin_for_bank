import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
} from "react-admin";

export const PackagesCreate = () => (
  <Create resource="packages">
    <SimpleForm>
      {/* ID не нужен при создании */}
      <TextInput source="name" label="Название пакета"/>
      <NumberInput source="cashback" label="Кэшбэк"/>
    </SimpleForm>
  </Create>
); 