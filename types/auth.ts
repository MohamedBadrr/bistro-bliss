export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  image: string | null;
  phone: string | null;
  street_address: string | null;
  postal_code: string | null;
  city: string | null;
  country: string | null;
  role: "USER" | "ADMIN";
  created_at: string;
  updated_at: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface UserWithoutPassword extends Omit<User, "password"> {}

export interface RegisterProps {
  name: string;
  email: string;
  password: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface AuthResult {
  success: boolean;
  user?: UserWithoutPassword;
  error?: string;
}

// Database table types based on SQL schema
export interface Account {
  id: string;
  user_id: string;
  type: string;
  provider: string;
  provider_account_id: string;
  refresh_token: string | null;
  access_token: string | null;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  id_token: string | null;
  session_state: string | null;
}

export interface Session {
  id: string;
  session_token: string;
  user_id: string;
  expires: string;
}

export interface VerificationRequest {
  id: string;
  identifier: string;
  token: string;
  expires: string;
  created_at: string;
  updated_at: string;
}