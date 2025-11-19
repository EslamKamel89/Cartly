export interface Product {
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  rating: number;
  image: string;
  id: string;
}

export interface ApiResponse<T> {
  loading: boolean;
  error: string | null;
  data: T;
}

export const initialResponse: ApiResponse = {
  loading: false,
  error: null,
};
