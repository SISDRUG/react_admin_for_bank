import {
  Create,
  SimpleForm,
  NumberInput,
  TextInput,
  DateInput,
  ReferenceInput,
  BooleanInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const BankAccountsCreate = () => {
    // const transform = async (data: { currencyId: any; }) => {
    //     // Получаем полные данные о валюте
    //     const currencyResponse = await dataProvider.getOne('currencies', { id: data.currencyId });
        
    //     // Проверяем, что данные о валюте были получены успешно
    //     if (!currencyResponse.data) {
    //         throw new Error('Currency not found');
    //     }
    
    //     // Возвращаем объект с добавленными данными о валюте
    //     return {
    //         ...data,
    //         currencyId: currencyResponse.data, // Заменяем id на полный объект
    //     };
    // };

    // const handleSubmit = async (data: any) => {

    //     console.log("Data before sending:", data);
    //    const transformedData = await transform(data);
        
    //     // Теперь transformedData содержит полную информацию о валюте
    //     console.log("Transformed Data:", transformedData);

      // };

    //   onSubmit={handleSubmit}

  return (
    <Create resource="bankAccounts">
        <SimpleForm > 
        <NumberInput source="balance" />
        <TextInput source="type" />
        <DateInput source="dateOfCreation" defaultValue={new Date()} />
        <BooleanInput source="accountStatus" />
        <DateTimeInput source="lastOperationDate" defaultValue={new Date()} />
         <ReferenceInput source="currencyId" reference="currencies">
            <SelectInput 
                optionText="curAbbreviation"
                optionValue="id"    
            />
        </ReferenceInput>

      </SimpleForm>
    </Create>
  );
};

