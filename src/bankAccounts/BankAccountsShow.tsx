import {
  Show,
  SimpleShowLayout,
  NumberField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const BankAccountsShow = () => {
  return (
    <Show resource="bankAccounts">
      <SimpleShowLayout>
        <NumberField source="id" />
        <NumberField source="balance" />
        <TextField source="type" />
        <DateField source="dateOfCreation" />
        <TextField source="currency.id"/>
        <TextField source="currency.curAbbreviation" />
        <BooleanField source="accountStatus" />
        <DateField source="lastOperationDate" />
      </SimpleShowLayout>
    </Show>
  );
};
