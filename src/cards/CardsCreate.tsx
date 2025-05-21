import {
  Create,
  SimpleForm,
  NumberInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  required,
  minValue,
  maxValue,
} from "react-admin";
import { Box, Typography, Paper, Grid } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';

export const CardsCreate = () => {
  // Функция для преобразования данных перед отправкой на бэкенд (аналогично Edit)
  const transform = (data: any) => {
    const { monthOfExp, yearOfExp, ...rest } = data;

    const year = parseInt(yearOfExp, 10);
    const month = parseInt(monthOfExp, 10);

    const expiryDateArray = [year, month, 1];

    return {
      ...rest,
      yearOfExp: expiryDateArray,
      monthOfExp: expiryDateArray,
    };
  };

  return (
    <Create resource="cards" transform={transform}>
      <SimpleForm sx={{ maxWidth: 600, margin: '0 auto' }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <PaymentIcon sx={{ mr: 1 }} /> Создание карты
          </Typography>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Grid container spacing={2}>
              {/* ID не нужен при создании */}
              <Grid item xs={12} md={6}>
                <NumberInput source="balance" label="Баланс" validate={required()}/>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* Поле для выбора пакета */}
                <ReferenceInput source="packageField.id" reference="packages" label="Пакет" >
                    <SelectInput optionText="name" />
                </ReferenceInput>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* Поля для ввода месяца и года окончания */}
                <NumberInput 
                  source="monthOfExp" 
                  label="Месяц окончания (MM)" 
                  validate={[required(), minValue(1), maxValue(12)]}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <NumberInput 
                  source="yearOfExp" 
                  label="Год окончания (YYYY)" 
                  validate={[required(), minValue(1000)]}
                />
              </Grid>
              <Grid item xs={12}>
                <NumberInput source="cardNumber" label="Номер карты" validate={required()}/>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput source="cardStatus" label="Статус карты" validate={required()}/>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput source="holderName" label="Имя держателя" validate={required()}/>
              </Grid>
              <Grid item xs={12}>
                {/* isVirtual может иметь дефолтное значение или быть BooleanInput */}
                <BooleanInput source="isVirtual" label="Виртуальная" defaultValue={false} />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </SimpleForm>
    </Create>
  );
}; 