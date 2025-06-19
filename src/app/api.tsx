import { ILoginRequest } from '@/app/models/auth-models';
import axios from 'axios';
import { IReminderAndReserve, IRequestBlood, IScheduleAppointment } from '@/app/models/donor-models';
import { ITransfusionCenterAppointment } from '@/app/models/transfusion-center-models';

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
        return api.get('/v1/transfusion-center/' + id + '/donations');
    },
    
    getBloodRequests: (id: number) => {
        return api.get('/v1/transfusion-center/' + id + '/blood-requests');  
    },
    
    updateBloodRequest: (centerId: number, bloodRequestId: number, status: string) => {
        return api.patch('/v1/transfusion-center/' + centerId + '/blood-requests/' + bloodRequestId, status);
    },

    scheduleAppointment: (id: number, request: ITransfusionCenterAppointment) => {
        return api.post('/v1/transfusion-center/' + id + '/appointment', request);
    },

    getDonors: (id: number) => {
        return api.get('/v1/transfusion-center/' + id + '/donors');
    }
}

export const donorService = {
    getDonorDetails: (id: number) => {
        return api.get('/v1/donors/' + id)
    },
    
    getDonations: (id: number) => {
        return api.get('/v1/donors/' + id + '/donations')
    },

    uploadFile: (id: number, file: FormData) => {
        return api.post('/v1/donors/' + id + '/medical-file-upload', file, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    requestBlood: (id: number, request: IRequestBlood) => {
        return api.post('/v1/donors/' + id + '/request-blood', request);
    },

    getClosestCentersForUser: (userId: number) => {
        return api.get('/v1/donors/' + userId + '/closest-transfusion-centers')
    },

    scheduleAppointment: (id: number, request: IScheduleAppointment) => {
        return api.post('/v1/donors/' + id + '/appointment', request);
    },

    reminderAndReserve: (id: number, request: IReminderAndReserve) => {
        return api.post('/v1/donors/' + id + '/remind-and-reserve', request);
    },
}

export default api;