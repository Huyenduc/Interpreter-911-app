import ApiClient from '@api';
import env from '@env';
import { UserLoginRequestPayload } from './types';
export async function login({ email, password }: UserLoginRequestPayload) {
    try {
        const response = await ApiClient.post(`http://10.10.21.18:3001/api/auth/login-interpreter`, {email, password});
        console.log('res:', response);
        return response;
    } catch (error) {
        console.error('Login Error: ', error);
        throw error;
    }
}