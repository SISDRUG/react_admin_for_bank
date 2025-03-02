import {
  List,
  Datagrid,
  NumberField,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

export const CurrenciesList = () => {
  return (
    <List resource="currencies">
      <Datagrid rowClick="show">
        <NumberField source="id" />
        <TextField source="curAbbreviation" />
        <NumberField source="curScale" />
        <TextField source="curRate" />
        <>
          <EditButton />
          <DeleteButton />
        </>
      </Datagrid>
    </List>
  );
};
