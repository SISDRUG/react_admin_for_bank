import {
  List,
  Datagrid,
  NumberField,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
  EditButton,
  DeleteButton,
  ReferenceInput,
  SelectField,
} from "react-admin";

export const BankAccountsList = () => {
  return (
      <List resource="bankAccounts">
        <Datagrid rowClick="show">
          <NumberField source="id" />
          <NumberField source="balance" />
          <TextField source="type" />
          <ReferenceField source="currency.id" reference="currencies">
                <TextField source="curAbbreviation" />
            </ReferenceField>
          <DateField source="dateOfCreation" />
          <BooleanField source="accountStatus" />
          <DateField source="lastOperationDate" />
          <>
            <EditButton />
            <DeleteButton />
          </>
        </Datagrid>
      </List>
  );
};
