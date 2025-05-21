import {
  Edit,
  SimpleForm,
  NumberInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { required, minValue, maxValue } from 'react-admin'; // Добавляем валидаторы

export const CardsEdit = () => {
  // Функция для преобразования данных перед отправкой на бэкенд
  const transform = (data: any) => {
    // data здесь содержит все поля формы, включая monthOfExp и yearOfExp
    const { monthOfExp, yearOfExp, ...rest } = data; // Получаем значения из формы (теперь это числа)

    // Предполагаем, что monthOfExp и yearOfExp в форме сейчас числа (из NumberInput)
    const year = parseInt(yearOfExp, 10); // Преобразуем год в число
    const month = parseInt(monthOfExp, 10); // Преобразуем месяц в число

    // Формируем массив даты в формате [год, месяц, день]
    // Используем 1-е число месяца по умолчанию
    const expiryDateArray = [year, month, 1];

    // Возвращаем преобразованные данные, сохраняя остальные поля
    // Отправляем оба поля yearOfExp и monthOfExp в формате массива даты [YYYY, MM, DD]
    return {
      ...rest,
      yearOfExp: expiryDateArray,
      monthOfExp: expiryDateArray, // Отправляем один и тот же массив для обоих полей
    };
  };

  return (
    <Edit resource="cards" transform={transform}>
      <SimpleForm>
        <NumberInput source="id" disabled label="ID" /> {/* ID делаем disabled */}
        <NumberInput source="balance" label="Баланс" />
        {/* Поле для выбора пакета */}
        <ReferenceInput source="packageField.id" reference="packages" label="Пакет">
            <SelectInput optionText="name" />
        </ReferenceInput>
        {/* Поля для ввода месяца и года окончания */}
        {/* Используем format для извлечения числа из входящего массива [YYYY, MM, DD] */}
        <NumberInput 
          source="monthOfExp" 
          label="Месяц окончания (MM)" 
          validate={[required(), minValue(1), maxValue(12)]}
          format={(value: any) => Array.isArray(value) ? value[1] : value} // Извлекаем месяц из массива
        />
        <NumberInput 
          source="yearOfExp" 
          label="Год окончания (YYYY)" 
          validate={[required(), minValue(1000)]}
          format={(value: any) => Array.isArray(value) ? value[0] : value} // Извлекаем год из массива
        />

        <NumberInput source="cardNumber" label="Номер карты" />
        <TextInput source="cardStatus" label="Статус карты" />
        <TextInput source="holderName" label="Имя держателя" />
        <BooleanInput source="isVirtual" label="Виртуальная" />
      </SimpleForm>
    </Edit>
  );
}; 