import {
  List,
  Datagrid,
  NumberField,
  TextField,
  DateField,
  BooleanField,
  EditButton,
  DeleteButton,
} from "react-admin";

export const UsersList = () => {
  return (
    <List resource="users">
      <Datagrid rowClick="show">
        <NumberField source="id" />
        <TextField source="name" />
        <TextField source="surname" />
        <DateField source="dateOfBirth" />
        <TextField source="contactPhone" />
        <TextField source="address" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <BooleanField source="isActive" />
        <BooleanField source="verificationStatus" />
        <>
          <EditButton />
          <DeleteButton />
        </>
      </Datagrid>
    </List>
  );
};
