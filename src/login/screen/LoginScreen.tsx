import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import {style} from '../styles/styleLogin'
import { authContext } from '../../context/authContext'
import { CustomInput } from '../../components/CustomInput'
import { CustomButton } from '../../components/CustomButton'
import { Logo } from '../../components/Logo'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any>{};

export const LoginScreen = ({navigation}:Props) => {
    const { register } = useContext(authContext);
    const {control, handleSubmit, watch, formState: { errors }} = useForm();

    const signIn = handleSubmit((data) => {
        console.log(data);
        
        register(data);
    })

  return (
    <View style={ style.content }>
        <View style={ style.logoContent}>
            <Logo />
        </View>
        <View style={ style.contentText }>
            <Text style={ style.text }>Ingrese a su cuenta</Text>
        </View>
        <CustomInput
            control={control}
            name='email'
            rules= {{
                required: {
                    value: true,
                    message: 'El correo es obligatorio'
                },
                pattern: {
                    value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'El correo no es valido'
                }
            }}
            placeholder='Correo Electrónico'
            errors={errors.email}
        />
        <CustomInput
            control={control}
            name='password'
            rules={{
                required: {
                    value: true,
                    message:'La contraseña es requerida'
                },
                minLength: {
                    value: 8,
                    message: 'La contraseña debe de tener minimo 8 caracteres'
                }
            }}
            placeholder='Contraseña'
            errors={errors.password}
        />

        <View style={{marginTop: 35}}>
            <CustomButton
                name='INICIAR'
                onPress={signIn}
            />
        </View>
        <View style={ style.contentCheckIn }>
            <Text style={ style.textCheckIn }>
                ¿No tengo una cuenta?
            </Text>
            <TouchableOpacity
                activeOpacity={0.6}
                style={{ marginTop:10}}
                onPress={ () => navigation.navigate('register') }
            >
                <Text style={ [style.textCheckIn, {color: '#00045E'}] }>
                    Registrarse
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}