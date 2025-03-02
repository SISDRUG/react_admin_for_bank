import {
  List,
  Datagrid,
  NumberField,
  TextField,
  DateField,
  BooleanField,
  EditButton,
  DeleteButton,
  TextInput,
  DateInput,
  BooleanInput,
  SearchInput,
  FilterButton,
  CreateButton,
  ExportButton,
  TopToolbar,
  SelectColumnsButton,
  SimpleList,
  WrapperField,
  ChipField,
  Pagination,
  useRecordContext,
} from "react-admin";
import { useMediaQuery, Theme, Chip, Box, Typography, Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';


const ListActions = () => (
  <TopToolbar>
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const StatusField = () => {
  const record = useRecordContext();
  if (!record) return null;
  
  return record.isActive ? (
    <Chip 
      icon={<CheckCircleIcon />}
      label="Активен"
      color="success"
      size="small"
    />
  ) : (
    <Chip 
      icon={<CancelIcon />}
      label="Неактивен"
      color="error"
      size="small"
    />
  );
};

const VerificationField = () => {
  const record = useRecordContext();
  if (!record) return null;
  
  return record.verificationStatus ? (
    <Chip 
      icon={<CheckCircleIcon />}
      label="Верифицирован"
      color="success"
      size="small"
    />
  ) : (
    <Chip 
      icon={<CancelIcon />}
      label="Не верифицирован"
      color="warning"
      size="small"
    />
  );
};

const UserItem = () => {
  const record = useRecordContext();
  if (!record) return null;
  
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Avatar sx={{ bgcolor: record.isActive ? 'success.main' : 'error.main' }}>
        {record.name.charAt(0)}{record.surname?.charAt(0)}
      </Avatar>
      <Box>
        <Typography variant="body1">
          {record.name} {record.surname}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {record.contactPhone}
        </Typography>
      </Box>
    </Box>
  );
};

export const UsersList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
  
  return (
    <List 
      resource="users"
      actions={<ListActions />}
      pagination={<Pagination rowsPerPageOptions={[10, 25, 50, 100]} />}
      sort={{ field: 'createdAt', order: 'DESC' }}
    >
      {isSmall ? (
        <SimpleList
          primaryText={<UserItem />}
          secondaryText={(record) => record.contactPhone}
          tertiaryText={(record) => new Date(record.createdAt).toLocaleDateString()}
          linkType="show"
        />
      ) : (
        <Datagrid bulkActionButtons={false} rowClick="show">
          <NumberField source="id" />
          <TextField source="name" />
          <TextField source="surname" />
          <TextField source="contactPhone" />
          <DateField source="dateOfBirth" />
          <WrapperField label="Статус">
            <StatusField />
          </WrapperField>
          <WrapperField label="Верификация">
            <VerificationField />
          </WrapperField>
          <DateField source="createdAt" showTime />
          <Box display="flex" gap={1}>
            <EditButton />
            <DeleteButton />
          </Box>
        </Datagrid>
      )}
    </List>
  );
};
