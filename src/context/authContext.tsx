import { createContext, useReducer } from "react";
import { LoginResponse, Register, User } from "./interface/appInterface";
import { authReducer, AuthState } from "./authReducer";
import cafeApi from "../api/cafeApi";


type authContextProps = {
    token: string | null,
    user: User | null,
    register: (data: any) => void;
}

const authInit: AuthState = {
    token: null,
    user: null
}

export const authContext = createContext({} as authContextProps);

export const AuthProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(authReducer, authInit);

    const register = async (data:any) => {
        
        try {
            const resp = await cafeApi.post<LoginResponse>('/register', data);
            console.log(resp);
            
        } catch(e) {
            console.log(e);
        }
    }
    return (
        <authContext.Provider
            value={{
                ...state,
                register
            }}
        >
            { children }
        </authContext.Provider>
    )
}