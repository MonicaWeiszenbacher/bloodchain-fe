export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
    id: string;
    role: string;
}