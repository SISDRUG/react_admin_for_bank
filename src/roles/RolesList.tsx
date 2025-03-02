import {
  List,
  Datagrid,
  NumberField,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

export const RolesList = () => {
  return (
    <List resource="roles">
      <Datagrid rowClick="show">
        <NumberField source="id" />
        <TextField source="role" />
        <>
          <EditButton />
          <DeleteButton />
        </>
      </Datagrid>
    </List>
  );
};
