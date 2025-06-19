export interface IDonorDetails {
    name: string;
    email: string;
    age: number;
    gender: string;
    bloodGroup: string;
    numberOfTokens: number;
    nextDonationDate: string;
}

export interface IDonorDonationHistory {
    id: number;
    transfusionCenter: string;
    time: string;
    units: number;
    token: number;
}

export interface IRequestBlood {
    bloodGroup: string;
    units: number;
    takeoverDate: string;
}

export interface IScheduleAppointment {
    transfusionCenterId: number;
    time: string;
}

export interface IReminderAndReserve {
    transfusionCenterId: number;
    startDate: string;
    frequency: number;
}