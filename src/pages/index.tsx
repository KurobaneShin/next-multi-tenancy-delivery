import * as React from 'react';

import { Switch } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';

import Link from '@/components/Link';
import useMode from '@/hooks/useMode';

const Home: NextPage = () => {
  const { mode, onChangeThemeType } = useMode();
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Switch
          color="primary"
          checked={mode === 'dark'}
          onChange={(event) => onChangeThemeType(event.target.checked ? 'dark' : 'light')}
        />
        <Link href="/icaroBurguer" color="secondary">
          Go to the burger page
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
