export interface Product {
  id?: string | number;
  title: string;
  price: number;
  images: string;
  description?: string;
  iscountPercentage?: number;
  brand?: string;
}
