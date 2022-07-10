import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Container, Grid, InputAdornment, Stack, Switch, TextField, Typography, useTheme } from '@mui/material';
import { GetServerSideProps } from 'next';

import Banner from '@/components/Banner';
import ProductItem from '@/components/ProductItem';
import useMode from '@/hooks/useMode';
import useTenant2 from '@/hooks/useTenant';
import { tenantService, useTenantType } from '@/services/tenant';

const items = {
  id: 1,
  image: '/tmp/burger.png',
  categoryName: 'Tradicional',
  name: 'Burguer',
  price: 'R$ 25,00',
};

type Props = {
  tenant: useTenantType;
};

function Index({ tenant }: Props) {
  const theme = useTheme();
  const { setTenant } = useTenant2();
  setTenant(tenant);
  const { mode, onChangeThemeType } = useMode();
  return (
    <Container maxWidth="md" sx={{ py: 2, px: 3 }}>
      <Stack spacing={3} direction="column">
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={10}>
            <Typography variant="h6">Bem vindo(a)</Typography>
            <Typography variant="caption" sx={{ color: theme.palette.grey[500] }}>
              O que deseja para hoje?
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <Stack direction="row" justifyContent="end">
              <Switch
                color="primary"
                checked={mode === 'dark'}
                onChange={(event) => onChangeThemeType(event.target.checked ? 'dark' : 'light')}
              />
              <Avatar sx={{ bgcolor: theme.palette.background.default }} variant="rounded">
                <MenuIcon sx={{ color: theme.palette.primary.main }} />
              </Avatar>
            </Stack>
          </Grid>
        </Grid>

        <TextField
          fullWidth
          autoComplete="off"
          placeholder="Digite o nome do burger"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: theme.palette.grey[500] }} />
              </InputAdornment>
            ),
          }}
        />
        <Banner />
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <ProductItem data={items} />
          </Grid>
          <Grid item xs={6}>
            <ProductItem data={items} />
          </Grid>
          <Grid item xs={6}>
            <ProductItem data={items} />
          </Grid>
          <Grid item xs={6}>
            <ProductItem data={items} />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}

export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantUrl } = context.query;
  const tenantApi = tenantService();

  const tenant = await tenantApi.getTenant(tenantUrl as string);

  if (!tenant) {
    context.res.statusCode = 404;
    context.res.end('Not found');
    return { redirect: { destination: '/', permanent: false } };
  }

  return {
    props: {
      tenant,
    },
  };
};
