/// <reference types="vite/client" />
interface Profile {
    avatar: string;
    email: string;
    id: number;
    first_name: string;
    last_name: string;
}

export interface ProfileDetailResponse {
    data: Profile;
}

export interface UserAPIResponse {
    data: Profile[];
}

interface Order {
    id: number;
    title: string;
    price: number;
    quantity: number;
    thumbnail: string;
}

export interface OrderDetail {
    total: number;
    products: Order[];
    totalProducts: number;
    totalQuantity: number;
}

export interface ProductsDetailResponse {
    total: number;
    products: Product[];
}

export interface Product {
    id: string;
    title: string;
    description: string;
    category: string;
    brand: string;
    price: number;
    rating: string;
    thumbnail: string;
}
