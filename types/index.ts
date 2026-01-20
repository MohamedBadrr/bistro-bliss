export type Tip = {
  label: string; // e.g. "Quality Beef"
  text: string;
};

export type ContentSection = {
  heading: string; // e.g. "What do you need to prepare a home-made burger?"
  intro: string;
  tips: Tip[];
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string; // ISO: YYYY-MM-DD
  coverImage: string; // your path/url
  sections: ContentSection[];
  tags?: string[];
};

export type ContactUsFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type Item = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export type CustomError = {
  errorBody: Error;
  message: string;
  errors?: Record<string, string[]>;
  status: number;
};



export type UserProfile = {
  id: string;
  email: string;
  name: string;
  image: string | null;
  phone: string | null;
  street_address: string | null;
  postal_code: string | null;
  city: string | null;
  country: string | null;
  role: "USER" | "ADMIN";
  created_at: string;
  updated_at: string;
};