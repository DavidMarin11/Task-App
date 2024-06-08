import { LoginResponse, User } from "./interface/appInterface";

export interface AuthState {
    token: string | null,
    user: User | null
}

type authAction = 
    | {type: 'login', payload: {token: string, user: User}}


export const authReducer = (state: AuthState, action: authAction ): AuthState => {

    switch(action.type) {
        case 'login' : 
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            }
        default:
            return state;
    }
}