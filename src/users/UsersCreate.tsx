import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  BooleanInput,
  required,
  email,
  minLength,
  maxLength,
  regex,
  FormDataConsumer,
  SaveButton,
  Toolbar,
  useNotify,
  useRedirect,
  ToolbarProps,
} from "react-admin";
import { Grid, Box, Typography, Paper, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const phoneNumberValidation = [
  required(),
  regex(/^\+?[0-9]{10,15}$/, 'Должен быть действительный номер телефона')
];

const nameValidation = [required(), minLength(2), maxLength(50)];

const UserCreateToolbar = (props: ToolbarProps) => {
  return (
    <Toolbar {...props}>
      <SaveButton label="Сохранить пользователя" />
    </Toolbar>
  );
};

export const UsersCreate = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  const handleSubmit = async (data: any) => {
    try {
      // Здесь может быть дополнительная обработка данных перед отправкой
      notify('Пользователь успешно создан', { type: 'success' });
      redirect('list', 'users');
    } catch (error) {
      notify(`Ошибка: ${error}`, { type: 'error' });
    }
  };

  return (
    <Create resource="users">
      <SimpleForm 
        onSubmit={handleSubmit}
        toolbar={<UserCreateToolbar />}
        sx={{ maxWidth: 800, margin: '0 auto' }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <PersonIcon sx={{ mr: 1 }} /> Основная информация
          </Typography>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextInput 
                  source="name" 
                  label="Имя" 
                  validate={nameValidation} 
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput 
                  source="surname" 
                  label="Фамилия" 
                  validate={nameValidation} 
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DateInput 
                  source="dateOfBirth" 
                  label="Дата рождения" 
                  validate={required()} 
                  fullWidth
                />
              </Grid>
            </Grid>
          </Paper>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <ContactPhoneIcon sx={{ mr: 1 }} /> Контактная информация
          </Typography>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextInput 
                  source="contactPhone" 
                  label="Телефон" 
                  validate={phoneNumberValidation} 
                  fullWidth
                  helperText="Формат: +XXXXXXXXXXX"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput 
                  source="email" 
                  label="Email" 
                  validate={[required(), email()]} 
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextInput 
                  source="address" 
                  label="Адрес" 
                  fullWidth
                  multiline
                  rows={2}
                />
              </Grid>
            </Grid>
          </Paper>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Настройки аккаунта</Typography>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <BooleanInput source="isActive" label="Активный пользователь" />
              </Grid>
              <Grid item xs={12} md={6}>
                <BooleanInput source="verificationStatus" label="Верифицированный" />
              </Grid>
            </Grid>
          </Paper>
        </Box>

        <FormDataConsumer>
          {({ formData, ...rest }) => (
            formData.isActive === false && (
              <Box sx={{ mt: 2, p: 2, bgcolor: 'warning.light', borderRadius: 1 }}>
                <Typography variant="body2" color="warning.dark">
                  Внимание: Вы создаете неактивного пользователя. Он не сможет входить в систему.
                </Typography>
              </Box>
            )
          )}
        </FormDataConsumer>
      </SimpleForm>
    </Create>
  );
};
