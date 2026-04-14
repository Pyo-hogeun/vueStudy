import { useQuery } from "@tanstack/vue-query";
// ✅ 타입 정의
export type ProductStatus = 'draft' | 'published' | 'hidden';
export type Option = {
  _id?: string;
  name: string;
  extraPrice?: number;
  stock?: number;
};

export type Review = {
  _id?: string;
  userName?: string;
  rating: number;
  comment: string;
  createdAt?: string;
};


interface Product {
  _id: string;
  name: string;
  price: number;
  storeName: string;
  store: string;
  stockQty: number;
  imageUrl?: string;
  images?: string[];
  options?: Option[];
  description?: string;
  reviews?: Review[];
  status: ProductStatus;
}
export const useProducts = () => {
  return useQuery({
    queryKey: ['products-liast'],
    queryFn: () => $fetch<Product[]>('http://localhost:5001/api/products')
  })
}