import {
  List,
  Datagrid,
  NumberField,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

export const PackagesList = () => {
  return (
    <List resource="packages">
      <Datagrid rowClick="show">
        <NumberField source="id" />
        <TextField source="name" />
        <TextField source="cashback" />
        <>
          <EditButton />
          <DeleteButton />
        </>
      </Datagrid>
    </List>
  );
};
