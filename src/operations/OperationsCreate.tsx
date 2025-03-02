import {
  Create,
  SimpleForm,
  ReferenceInput,
  NumberInput,
  DateTimeInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const OperationsCreate = () => {
    const handleSubmit = async (data: any) => {
        console.log("Data before sending:", data);
      }
  return (
    <Create resource="operations">
      <SimpleForm>
      <ReferenceInput source="currencyId" reference="currencies">
          <SelectInput optionText="curAbbreviation" optionValue="id" />
        </ReferenceInput>
        <ReferenceInput source="cardId" reference="cards" />
        <NumberInput source="recipientDetails" />
        <NumberInput source="value" />
        <TextInput source="operationType" />
        <TextInput source="status" />
        <TextInput source="description" />
        <NumberInput source="referenceNumber" />
      </SimpleForm>
    </Create>
  );
};
