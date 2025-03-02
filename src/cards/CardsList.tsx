import {
  List,
  Datagrid,
  NumberField,
  TextField,
  DateField,
  BooleanField,
  EditButton,
  DeleteButton,
  ReferenceField,
} from "react-admin";

export const CardsList = () => {
  return (
    <List resource="cards">
      <Datagrid rowClick="show">
        <NumberField source="id" />
        <NumberField source="balance" />
        <ReferenceField source="id" reference="packages" label="package">
            <TextField source="name" />
        </ReferenceField>
        <DateField source="yearOfExp" />
        <DateField source="monthOfExp" />
        <NumberField source="cardNumber" />
        <TextField source="cardStatus" />
        <TextField source="holderName" />
        <BooleanField source="isVirtual" />
        <>
          <EditButton />
          <DeleteButton />
        </>
      </Datagrid>
    </List>
  );
};
