import {
  Show,
  SimpleShowLayout,
  NumberField,
  TextField,
  BooleanField,
  ReferenceField,
  useRecordContext,
  WrapperField,
} from "react-admin";

// Компонент для отображения срока действия карты (месяц/год)
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

export const CardsShow = () => {
  return (
    <Show resource="cards">
      <SimpleShowLayout>
        <NumberField source="id" />
        <NumberField source="balance" />
        {/* Отображение пакета через ReferenceField */}
        <ReferenceField source="packageField.id" reference="packages" label="Пакет">
            <TextField source="name" />
        </ReferenceField>
        {/* Кастомное поле для срока действия */}
        <WrapperField label="Срок действия">
          <ExpiryField />
        </WrapperField>
        <NumberField source="cardNumber" />
        <TextField source="cardStatus" />
        <TextField source="holderName" />
        <BooleanField source="isVirtual" />
      </SimpleShowLayout>
    </Show>
  );
}; 