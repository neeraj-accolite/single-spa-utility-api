import { OrderDetail, ProfileDetailResponse, UserAPIResponse, ProductsDetailResponse } from "./vite-env";
import { fetchData } from '@api-lib';
import Urls from './api-urls';

export async function getAllUsers(limit?: number): Promise<UserAPIResponse> {
  const url = Urls.allUsers.replace('$1', `${limit ?? 5}`);
  const response = await fetchData({ method: 'GET', url });
  return response.data;
}

export async function getProducts(limit?: number): Promise<ProductsDetailResponse> {
  const url = Urls.products.replace('$1', `${limit ?? 30}`);
  const response = await fetchData({ method: 'GET', url });
  return response.data;
}

export async function getProfileDetails(id: number): Promise<ProfileDetailResponse> {
  const url = Urls.profileDetail.replace('$1', `${id}`);
  const response = await fetchData({ method: 'GET', url });
  return response.data;
}

export async function getOrderDetails(id: number): Promise<OrderDetail> {
  const url = Urls.orderDetail.replace('$1', `${id}`);
  const response = await fetchData({ method: 'GET', url });
  return response.data;
}