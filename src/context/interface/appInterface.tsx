
export interface LoginResponse {
    user:  User;
    token: string;
}

export interface User {
    name:       string;
    email:      string;
    updated_at: Date;
    created_at: Date;
    id:         number;
}

export interface Register {
    email:            string;
    nombre:           string;
    password:         string;
    password_confirm: string;
}