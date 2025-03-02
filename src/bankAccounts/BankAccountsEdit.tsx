import {
  Edit,
  SimpleForm,
  NumberInput,
  TextInput,
  DateInput,
  ReferenceInput,
  BooleanInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const BankAccountsEdit = () => {

  const getCurrencyAbbreviation = (account: { currency: { curAbbreviation: any; }; }) => {
    return account.currency;
  };
      const handleSubmit = async (data: any) => {
        console.log("Data before sending:", data);
      }
    return (
      <Edit resource="bankAccounts">
        <SimpleForm>
          <NumberInput source="balance" />
          <TextInput source="type" />
          <DateInput source="dateOfCreation" />

        {/* Добавляем текстовое поле для отображения текущей валюты */}
        <TextInput source="currency.curAbbreviation" label="Current Currency" disabled />
                  {/* Используем ReferenceInput для выбора валюты */}
        <ReferenceInput source="currencyId" reference="currencies">
          <SelectInput optionText="curAbbreviation" optionValue="id" />
        </ReferenceInput>

          <BooleanInput source="accountStatus" />
        </SimpleForm>
      </Edit>
  );
};

export default BankAccountsEdit