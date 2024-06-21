import { View, Text, TextInput, Button, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import {style} from '../style/styleRegister'
import { authContext } from '../../context/authContext'
import { CustomInput } from '../../components/CustomInput'
import { CustomButton } from '../../components/CustomButton'
import { Logo } from '../../components/Logo'
import { ScrollView } from 'react-native-gesture-handler'
import { ModalMessage } from '../../components/ModalMessage'

export const RegisterScreen = () => {
    const { register, bandera } = useContext(authContext);
    const {control, handleSubmit, watch, formState: { errors }} = useForm();

    const passValidate = watch('password')

    const signUp = handleSubmit((data) => {
        register(data);
        if (bandera) {
            showToastWithGravity();
        }
    })

    const showToastWithGravity = () => {
        ToastAndroid.showWithGravityAndOffset(
            'El correo ingresado ya se encuentra registrado.',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
    };

  return (
    <View style={ style.content }>
        <ScrollView>
            <View style={ style.logoContent}>
                <Logo />
            </View>
            <View style={ style.contentText }>
                <Text style={ style.text }>Crea tu cuenta</Text>
            </View>
            
            <CustomInput
                control={control}
                name='name'
                rules= {{
                    required: {
                        value: true,
                        message: 'El nombre es obligatorio'
                    },
                    minLength: {
                        value: 3,
                        message: 'El nombre debe de ser de mas 3 caracteres'
                    }
                }}
                placeholder='Nombre'
                errors={errors.name}
            />
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
                secureTextEntry={true}
            />
            <CustomInput
                control={control}
                name='password_confirm'
                rules={{
                    required: {
                        value: true,
                        message:'La confirmación de la contraseña es requerida'
                    },
                    validate: value => value === passValidate || 'La contraseña no coincide'
                }}
                placeholder='Confirmar Contraseña'
                errors={errors.password_confirm}
                secureTextEntry={true}
            />
            <View style={{marginTop: 35}}>
                <CustomButton
                    name='REGISTRAR'
                    onPress={signUp}
                />
            </View>
            <View style={{marginTop: 20}} />
        </ScrollView>
    </View>
  )
}

