import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const InitialScreen = () => {
  return (
    <View style={style.contentInitial}>
         <View>
            <Text style={ style.textLogo }>
                TASK APP
            </Text>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    contentInitial: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00045E'
    },
    textLogo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    }
})
