export const API_ENDPOINTS = {

  auth: {
    login: '/auth/login',
    register: '/auth/register',
    refreshToken: '/auth/refresh-token',
    logout: '/auth/logout'
  },

  owner: {
    merchants: '/merchants',
    partners: '/partners',
    customers: '/customers'
  },

  merchant: {
    products: '/products',
    orders: '/orders'
  },

  partner: {
    customers: '/customers',
    commissions: '/commissions'
  },

  customer: {
    products: '/products',
    orders: '/orders'
  }

};
