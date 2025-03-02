import {
  List,
  Datagrid,
  NumberField,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  ReferenceField,
} from "react-admin";

export const OperationsList = () => {
  return (
    <List resource="operations">
      <Datagrid rowClick="show">
        <NumberField source="id" />
        <ReferenceField source="currency.id" reference="currencies" label="Currency">
          <TextField source="curAbbreviation" />
        </ReferenceField>
        <ReferenceField source="card.id" reference="cards" label="Card number">
                <TextField source="cardNumber" />
            </ReferenceField>
        <NumberField source="recipientDetails" />
        <NumberField source="value" />
        <DateField source="dateTime" />
        <TextField source="operationType" />
        <TextField source="status" />
        <TextField source="description" />
        <NumberField source="referenceNumber" label ="Ref number"/>
        <>
          <EditButton />
          <DeleteButton />
        </>
      </Datagrid>
    </List>
  );
};
