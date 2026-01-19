export interface LoginFormValues {
  email: string;
  password: string;
}

export interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type UpdateProfileFormValues = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  street_address?: string;
  image?: string;
  country?: string;
  city?: string;
  file?: File | null;
};



export type ProductSizeFormValues = {
  name: string;
  price: number;
};

export type ProductExtraFormValues = {
  name: string;
  price: number;
};

export type AddProductFormValues = {
  name: string;
  description?: string;
  price: number;
  category: string;
  sizes: ProductSizeFormValues[];
  extras: ProductExtraFormValues[];
  file: File | null;
};