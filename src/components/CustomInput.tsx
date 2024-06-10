import React from 'react'
import { Controller } from 'react-hook-form'
import { StyleSheet, Text, TextInput, View } from 'react-native'

interface Props {
    control: any
    name: string,
    rules: any,
    placeholder: string,
    errors: any,
    secureTextEntry?: boolean
}

export const CustomInput = ({control, name, rules, placeholder, errors, secureTextEntry}:Props) => {
  return (
    <View style={ style.formRegister }>
        <Controller
            control= {control}
            name = {name}
            rules = {rules}
            render={({field:{ value, onChange, onBlur}, fieldState: {error}}) => (
                <TextInput 
                    style={[style.input, {borderColor: error ? 'red' : '#ccc'}]}
                    placeholder={placeholder}
                    value={ value }
                    onChangeText={ onChange }
                    onBlur={ onBlur }
                    secureTextEntry = {secureTextEntry}
                />
            )}
        />
        {
            errors && <Text style={{color: 'red'}}>{(errors.message?.toString())}</Text>
        }
    </View>
  )
}

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: '80%',
        height: 40,
        borderRadius: 10,
        padding: 10
    },
    formRegister: {
        marginTop: 20,
        alignItems: 'center',
    },
})
