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
  useRecordContext,
  WrapperField,
} from "react-admin";

const ExpiryField = () => {
  const record = useRecordContext();
  if (!record) return null;
  // Берём месяц и год из массива [YYYY, MM, DD]
  const month = Array.isArray(record.monthOfExp) ? String(record.monthOfExp[1]).padStart(2, '0') : '';
  const year = Array.isArray(record.yearOfExp) ? String(record.yearOfExp[0]).toString().slice(-2) : '';
  return (
    <span>
      {month}/{year}
    </span>
  );
};

export const CardsList = () => {
  return (
    <List resource="cards">
      <Datagrid rowClick="show">
        <NumberField source="id" />
        <NumberField source="balance" />
        <ReferenceField source="id" reference="packages" label="package">
            <TextField source="name" />
        </ReferenceField>
        <WrapperField label="Срок действия">
          <ExpiryField />
        </WrapperField>
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
