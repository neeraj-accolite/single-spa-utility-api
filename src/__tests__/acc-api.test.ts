import { describe, expect, test } from 'vitest';
import { getAllUsers, getProfileDetails } from '../acc-api';
import { Profile } from '../vite-env';

describe('Users API Endpoints', () => {
    test("The total number of users should match the limit passed in query ", async () => {
        let response: Profile[] = (await getAllUsers(10)).data;
        expect(response.length).toBe(10);
    });
});


describe('Profile Details API Endpoints', () => {
    test("The id in the profile details should match with the data fetched based on profile id", async () => {
        const id = 10;
        let response: Profile = (await getProfileDetails(id)).data;
        expect(response.id).toBe(id);
    });
});