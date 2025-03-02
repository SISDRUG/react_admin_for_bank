import {
  List,
  Datagrid,
  NumberField,
  TextField,
  EditButton,
  DeleteButton,
  ReferenceField,
} from "react-admin";

export const CredentialsList = () => {
  return (
    <List resource="credentials">
      <Datagrid rowClick="show">
        <NumberField source="id" />
        <TextField source={"user.name"} label="Name"/>
        <TextField source={"user.surname"} label="Surname"/>
        <TextField source="email.email" label="Email"/>
        <ReferenceField source="role.id" reference="roles" label="Role">
                    <TextField source="role" />
                </ReferenceField>
        <>
          <EditButton />
          <DeleteButton />
        </>
      </Datagrid>
    </List>
  );
};
