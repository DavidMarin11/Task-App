import { createContext, useEffect, useReducer, useState } from "react";
import { LoginResponse, Register } from "./interface/appInterface";
import { authReducer, AuthState } from "./authReducer";
import cafeApi from "../api/cafeApi";
import AsyncStorage from "@react-native-async-storage/async-storage";


type authContextProps = {
    message: string,
    isLogin: boolean,
    isLoading: boolean,
    register: (data: any) => void;
    login: (data: any) => void;
}

const authInit: AuthState = {
    message: '',
    isLogin: false,
    isLoading: false
}

interface User {
    email: string;
}

export const authContext = createContext({} as authContextProps);

export const AuthProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(authReducer, authInit);

    const register = async (data:any) => {
        
        try {
            let users:any = await AsyncStorage.getItem('users');
            let usersList = [];
            let emailExists: boolean = false;
            let message = '';
            
            if (users != null) {
                usersList = JSON.parse(users);
                for (let i = 0; i < usersList.length; i++) {
                    
                    if (data.email === usersList[i]['email']) {
                        emailExists = true;
                        break;
                    }
                }
            } else {
                usersList.push(data);
            }
            
            if (!emailExists) {
                dispatch({type: 'isLoading'});
                setTimeout(() =>{
                    usersList.push(data);
                    AsyncStorage.setItem('users', JSON.stringify(usersList));
                    dispatch({type: 'login'});
                }, 3000);

            }

            if (emailExists) {
                message = 'El correo ingresado ya se encuentra registrado.';
                dispatch({type: 'register', payload: {message}});
            } else {
                message = '';
                dispatch({type: 'register', payload: {message}});
            }

        } catch(e) {
            let message = 'Ha ocurrido un error';
            dispatch({type: 'register', payload: {message}});
        }
    }

    const login = async (data:any) => {

        try {
            let user:any = await AsyncStorage.getItem('users');
            let message = '';
            dispatch({type: 'register', payload: {message}});

            user = JSON.parse(user);
            let userFound = user.find((ur:any) =>  ur.email === data.email);

            if (userFound != null) {
                
                if (userFound.password === data.password) {
                    dispatch({type: 'isLoading'});
                    setTimeout(() =>{
                        AsyncStorage.setItem('userLogin', JSON.stringify(user));
                        dispatch({type: 'login'});
                    }, 3000);
                } else {
                    message = 'La contraseña no coincide.';
                    dispatch({type: 'register', payload: {message}});
                }
            } else {
                message = 'El correo ingresado no fue encontrado.';
                dispatch({type: 'register', payload: {message}});
            }
            
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        const userLogi = async () => {
            let userLogin:any = await AsyncStorage.getItem('userLogin');
            userLogin = JSON.parse(userLogin);
            if (userLogin != null) {
                dispatch({type: 'login'});
            }
        }
        userLogi();
    })

    return (
        <authContext.Provider
            value={{
                ...state,
                register,
                login
            }}
        >
            { children }
        </authContext.Provider>
    )
}