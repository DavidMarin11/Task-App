import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    name: string,
    onPress: () => void;
}

export const CustomButton = ({name, onPress}: Props) => {
  return (
    <View style={style.contentButton}>
            <TouchableOpacity
            style={style.buttonRegister}
            activeOpacity={0.6}
            onPress={onPress}
            >
                <Text 
                    style={style.textButtonRegister}>
                    {name}
                </Text>
            </TouchableOpacity>
        </View>
  )
}

const style = StyleSheet.create({
    contentButton: {
        marginTop: 20,
        marginHorizontal: 20,
        alignItems: 'center'
    },
    buttonRegister: {
        backgroundColor: '#00045E',
        alignItems: 'center',
        width: 230,
        height: 50,
        borderRadius: 10
    },
    textButtonRegister: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        padding: 10
    }
})
