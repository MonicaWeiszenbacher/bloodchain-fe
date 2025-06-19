export interface ITransfusionCenterData {
    id: number;
    name: string;
    cityName: string;
}

export interface ITransfusionCenterDonationHistory {
    id: number;
    time: string;
    donorId: string;
    donorBloodGroup: string;
    units: number;
    token: string;
}

export interface ITransfusionCenterDonor {
    id: number;
    name: string;
    email: string;
    bloodGroup: string;
    age: number;
    gender: string;
}

export interface ITransfusionCenterAppointment {
    donorId: number;
    time: string;
}

export interface IBloodRequestData {
    id: number;
    requesterId: number;
    currentStock: number;
    bloodGroup: string;
    units: number;
    takeoverDate: string;
}

export enum IBloodRequestStatus {
    Approved = "APPROVED",
    Rejected = "REJECTED",
}

