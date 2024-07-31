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