export interface Category {
  id: string;
  name: string;
  description: string | null;
  image: string;
  display_order: number;
  created_at: string;
  updated_at: string;
}