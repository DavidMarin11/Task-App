import { View, Text, TextInput, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import {style} from '../style/styleRegister'
import { authContext } from '../../context/authContext'
import { CustomInput } from '../../components/CustomInput'

export const Register = () => {
    const { register } = useContext(authContext);
    const {control, handleSubmit, watch, formState: { errors }} = useForm();

    const passValidate = watch('password')

    const signIn = handleSubmit((data) => {
        register(data);
    })

  return (
    <View style={ style.content }>
        <View style={ style.contentText }>
            <Text style={ style.text }>Registrarse</Text>
        </View>
        <View style={ style.formRegister }>
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
            />
            {
            errors.name && <Text style={{color: 'red'}}>{(errors.name?.message?.toString())}</Text>
            }
        </View>
        <View style={ style.formRegister }>
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
            />
            {
            errors.email && <Text style={{color: 'red'}}>{(errors.email?.message?.toString())}</Text>
            }
        </View>
        <View style={ style.formRegister }>
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
            />
            {
            errors.password && <Text style={{color: 'red'}}>{(errors.password?.message?.toString())}</Text>
            }
        </View>
        <View style={ style.formRegister }>
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
            />
            {
            errors.password_confirm && <Text style={{color: 'red'}}>{(errors.password_confirm?.message?.toString())}</Text>
            }
        </View>
        <View style={style.contentButton}>
            <Button 
                title='Registrar'
                onPress={signIn}
            />
        </View>
    </View>
  )
}