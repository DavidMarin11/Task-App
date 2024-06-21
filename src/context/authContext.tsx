import { createContext, useReducer, useState } from "react";
import { LoginResponse, Register } from "./interface/appInterface";
import { authReducer, AuthState } from "./authReducer";
import cafeApi from "../api/cafeApi";
import AsyncStorage from "@react-native-async-storage/async-storage";


type authContextProps = {
    token: string | null,
    user: User | null,
    register: (data: any) => void;
    bandera: boolean;
}

const authInit: AuthState = {
    token: null,
    user: null
}

interface User {
    email: string;
}

export const authContext = createContext({} as authContextProps);

export const AuthProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(authReducer, authInit);
    const [bandera, setBandera] = useState<boolean>(false);

    const register = async (data:any) => {
        
        try {
            let users:any = await AsyncStorage.getItem('users');
            let usersList = [];
            
            if (users != null) {
                usersList = JSON.parse(users);
                for (let i = 0; i < usersList.length; i++) {
                    if (data.email === usersList[i]['email']) {
                        setBandera(true);
                        break;
                    }
                }
            } else {
                usersList.push(data);
            }
            
            if (!bandera) {
                usersList.push(data);
                await AsyncStorage.setItem('users', JSON.stringify(usersList))
            }
            
        } catch(e) {
            console.log(e);
        }
    }
    return (
        <authContext.Provider
            value={{
                ...state,
                register,
                bandera
            }}
        >
            { children }
        </authContext.Provider>
    )
}