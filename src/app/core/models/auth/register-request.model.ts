export interface RegisterRequest {
  email: string;
  phoneNumber: string;
  password: string;
  roleName: 'Owner' | 'Merchant' | 'Customer' | 'Partner';
}
