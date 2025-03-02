import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  Typography,
  Box,
  Paper,
  LinearProgress,
  useTheme
} from '@mui/material';
import { useDataProvider } from 'react-admin';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PeopleIcon from '@mui/icons-material/People';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  color: string;
}

interface Operation {
  id: number;
  description: string;
}

interface DashboardState {
  usersCount: number;
  accountsCount: number;
  operationsCount: number;
  cardsCount: number;
  loading: boolean;
  operations: Operation[];
}

export const Dashboard = () => {
  const dataProvider = useDataProvider();
  const [state, setState] = useState<DashboardState>({
    usersCount: 0,
    accountsCount: 0,
    operationsCount: 0,
    cardsCount: 0,
    loading: true,
    operations: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          { total: usersCount = 0 },
          { total: accountsCount = 0 },
          { total: operationsCount = 0, data: operations = [] }, // Получаем операции и их количество
          { total: cardsCount = 0 },
        ] = await Promise.all([
          dataProvider.getList('users', {
            pagination: { page: 1, perPage: 1 },
            sort: { field: 'id', order: 'ASC' },
            filter: {},
          }),
          dataProvider.getList('bankAccounts', {
            pagination: { page: 1, perPage: 1 },
            sort: { field: 'id', order: 'ASC' },
            filter: {},
          }),
          dataProvider.getList('operations', {
            pagination: { page: 1, perPage: 5 }, // Получаем последние 5 операций
            sort: { field: 'id', order: 'DESC' },
            filter: {},
          }),
          dataProvider.getList('cards', {
            pagination: { page: 1, perPage: 1 },
            sort: { field: 'id', order: 'ASC' },
            filter: {},
          }),
        ]);

        setState({
          usersCount,
          accountsCount,
          operationsCount,
          cardsCount,
          operations, // Сохраняем операции
          loading: false,
        });
      } catch (error) {
        console.error(error);
        setState((s) => ({ ...s, loading: false }));
      }
    };

    fetchData();
  }, [dataProvider]);

  const MetricCard: React.FC<MetricCardProps> = ({ icon, title, value, color }) => (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        display: 'flex',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: 2,
        height: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              width: 40,
              height: 40,
              backgroundColor: `${color}.lighter`,
              color: `${color}.main`,
              mr: 2,
            }}
          >
            {icon}
          </Box>
          <Typography variant="h6" color="text.secondary">
            {title}
          </Typography>
        </Box>

        <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
          {state.loading ? '—' : value.toLocaleString()}
        </Typography>
        
        {state.loading && <LinearProgress />}
      </Box>
    </Paper>
  );

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Дашборд администратора
      </Typography>

      <Grid container spacing={3}>
        {/* Метрики */}
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            icon={<PeopleIcon />}
            title="Пользователи"
            value={state.usersCount}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            icon={<AccountBalanceIcon />}
            title="Банковские счета"
            value={state.accountsCount}
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            icon={<MonetizationOnIcon />}
            title="Операции"
            value={state.operationsCount}
            color="warning"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            icon={<CreditCardIcon />}
            title="Карты"
            value={state.cardsCount}
            color="error"
          />
        </Grid>

        {/* Дополнительные карточки */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title="Последние операции" />
            <CardContent>
            {state.loading ? (
                <CircularProgress />
              ) : (
              <div>
                {state.operations.length > 0 ? (
                  state.operations.map((op) => (
                    <Typography key={op.id} variant="body2" color="text.secondary">
                      {op.currency.curAbbreviation} {op.value}
                    </Typography>
                  ))
              ) : (
                <Typography variant="body2" color="text.secondary">
                  Нет операций для отображения.
                </Typography>
              )}
              </div>
            )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title="Статистика активности" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Здесь будет график активности пользователей.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;