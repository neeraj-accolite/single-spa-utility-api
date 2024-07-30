import { getApiWrapper } from "./apiWrapper";
import { Profile } from "./vite-env";

export async function getAllUsers(limit?: number): Promise<{ data: Profile[] }> {
  const url = `https://reqres.in/api/users?page=1&per_page=${limit ?? 5}`;
  const response = await getApiWrapper({ method: 'GET', url });
  return response.data;
}

export async function getProfileDetails(id: number): Promise<{ data: Profile }> {
  const url = `https://reqres.in/api/users/${id}`;
  const response = await getApiWrapper({ method: 'GET', url });
  return response.data;
}

export async function getOrderDetails(id: number) {
  const url = `https://dummyjson.com/carts/${id}`;
  const response = await getApiWrapper({ method: 'GET', url });
  return response.data;
}