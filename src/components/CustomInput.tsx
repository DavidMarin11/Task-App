import React from 'react'
import { Controller } from 'react-hook-form'
import { StyleSheet, TextInput, View } from 'react-native'

interface Props {
    control: any
    name: string,
    rules: any,
    placeholder: string
}

export const CustomInput = ({control, name, rules, placeholder}:Props) => {
  return (
    <>
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
                />
            )}
        />
    </>
  )
}

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: '60%',
        height: 40,
        borderRadius: 10,
        padding: 10
    }
})
