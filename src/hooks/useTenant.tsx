import React from 'react';

import { TenantContext } from '@/contexts/tenantContext';

const useTenant = () => {
  const context = React.useContext(TenantContext);

  if (!context) throw new Error(`'useTenant' must be wrapped within Provider`);

  return context;
};

export default useTenant;
