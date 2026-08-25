export const API_ENDPOINTS = {

  auth: {
    login: '/Auth/login',
    register: '/Auth/register',
    refresh: '/Auth/refresh',
    revoke: '/Auth/revoke'
  },

  owner: {
    merchants: '/merchants',
    partners: '/partners',
    customers: '/customers',
    reports: '/reports'
  },

  merchant: {
    outlets: '/outlets',
    products: '/products',
    bills: '/bills'
  },

  customer: {
    bills: '/bills',
    profile: '/profile'
  },

  partner: {
    accounts: '/accounts',
    webhooks: '/webhooks',
    commissions: '/commissions'
  }
};

};
