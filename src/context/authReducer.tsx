import { LoginResponse, User } from "./interface/appInterface";

export interface AuthState {
    message: string,
    isLogin: boolean,
    isLoading: boolean
}

type authAction = 
    | {type: 'register', payload: {message: string}}
    | {type: 'login'}
    | {type: 'isLoading'}


export const authReducer = (state: AuthState, action: authAction ): AuthState => {

    switch(action.type) {
        case 'register' :
            return {
                ...state,
                message: action.payload.message,
            }
        case 'login' :
            return {
                ...state,
                isLogin: true,
                isLoading: false
            }
        case 'isLoading' :
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}