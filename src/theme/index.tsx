import React from 'react';

import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';

import { TenantContext } from '@/contexts/tenantContext';
import useMode from '@/hooks/useMode';

type ThemeConfigProps = {
  children: React.ReactNode;
};

function ThemeConfig({ children }: ThemeConfigProps) {
  const { mode } = useMode();
  const { tenant } = React.useContext(TenantContext);
  console.log('mode', mode);

  // main: '#ff9100',
  // main: '#ffc400',

  const customTheme = React.useMemo(
    () => ({
      palette: {
        primary: {
          main: tenant.mainColor,
        },
        secondary: {
          main: tenant.secondaryColor,
        },
        mode,
      },
    }),
    [mode, tenant]
  );
  const theme = createTheme(customTheme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default ThemeConfig;
