import { ILoginRequest } from '@/app/models/auth-models';
import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const authService = {
    login: (request: ILoginRequest) => {
        return api.post('/auth/login', request);
    },
    register: (userData: any) => {
        return api.post('/auth/register', userData);
    },
};

export const transfusionCenterService = {
    getDonations: (id: number) => {
        return api.get('/v1/appointments/completed/transfusion-centers/' + id)
    }
}

export default api;