import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanField,
  required,
} from "react-admin";
import { Box, Typography, Paper, Grid } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

export const LoginDetailsCreate = () => (
  <Create resource="loginDetails">
    <SimpleForm sx={{ maxWidth: 600, margin: '0 auto' }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <SecurityIcon sx={{ mr: 1 }} /> Данные для входа
        </Typography>
        <Paper elevation={2} sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextInput source="email" label="Email" validate={required()}/>
            </Grid>
            <Grid item xs={12}>
              <TextInput source="password" label="Пароль" validate={required()}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <NumberInput source="loginAttempts" label="Попытки входа" validate={required()}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <NumberInput source="userStatus" label="Статус пользователя" validate={required()}/>
            </Grid>
            <Grid item xs={12}>
              <BooleanField source="twoFactorAuthEnabled" label="Двухфакторная аутентификация включена" />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </SimpleForm>
  </Create>
); 