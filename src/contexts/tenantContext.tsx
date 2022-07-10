import React, { createContext, useMemo } from 'react';

import { useTenantType } from '@/services/tenant';

type ModeProviderProps = {
  children: React.ReactNode;
};

type ChangeModeProps = {
  tenant: useTenantType;
  setTenant: (tenant: useTenantType) => void;
};

const initialState: ChangeModeProps = {
  tenant: {
    name: '',
    mainColor: '#fff',
    secondaryColor: '#fff',
  },
  setTenant: () => null,
};

export const TenantContext = createContext(initialState);

export function TenantProvider({ children }: ModeProviderProps) {
  const [tenant, setTenant] = React.useState<useTenantType>(initialState.tenant);

  const memorizedMode = useMemo(() => ({ tenant, setTenant }), [tenant, setTenant]);

  return <TenantContext.Provider value={memorizedMode}>{children}</TenantContext.Provider>;
}

export default TenantContext;
