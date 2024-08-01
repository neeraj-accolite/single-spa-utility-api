import { describe, expect, test } from 'vitest';
import { getAllUsers, getOrderDetails, getProfileDetails } from '../acc-api';
import { OrderDetail, ProfileDetailResponse, UserAPIResponse } from '../vite-env';

describe('Users API Endpoints', () => {
    test("Total users count should be 5 if the limit is not passed in the query ", async () => {
        let response: UserAPIResponse = (await getAllUsers());
        expect(response.data.length).toBe(5);
    });

    test("The total number of users should match the limit passed in query ", async () => {
        let response: UserAPIResponse = (await getAllUsers(10));
        expect(response.data.length).toBe(10);
    });
});

describe('Profile Details API Endpoints', () => {
    test("The id in the profile details should match with the data fetched based on profile id", async () => {
        const id = 10;
        let response: ProfileDetailResponse = (await getProfileDetails(id));
        expect(response.data.id).toBe(id);
    });
});

describe('Orders Details API Endpoints', () => {
    test("Total number of products for the User id 1 is 5", async () => {
        const id = 1;
        let response: OrderDetail = (await getOrderDetails(id));
        expect(response.totalProducts).toBe(4);
    });
});
