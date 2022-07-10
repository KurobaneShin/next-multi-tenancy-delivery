export type useTenantType = {
  name: string;
  mainColor: string;
  secondaryColor: string;
};

export const tenantService = () => ({
  getTenant: (tenantUrl: string): boolean | useTenantType => {
    switch (tenantUrl) {
      case 'icaroBurger':
        return {
          name: 'icaroBurger',
          mainColor: '#ff9100',
          secondaryColor: '#ffc400',
        };
      case 'icaroPizza':
        return {
          name: 'icaroBurger',
          mainColor: '#0000FF',
          secondaryColor: '#00ff00',
        };
      default:
        return false;
    }
  },
});
