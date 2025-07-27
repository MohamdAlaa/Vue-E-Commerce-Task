export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: number;
  email: string;
  name: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface FormErrors {
  [key: string]: string;
} 