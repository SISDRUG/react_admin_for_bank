import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
} from "react-admin";

export const CurrenciesCreate = () => (
  <Create resource="currencies">
    <SimpleForm>
      {/* ID не нужен при создании */}
      <TextInput source="curAbbreviation" label="Аббревиатура"/>
      <NumberInput source="curScale" label="Масштаб"/>
      <NumberInput source="curRate" label="Курс"/>
    </SimpleForm>
  </Create>
); 