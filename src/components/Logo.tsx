import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Logo = () => {
  return (
    <>
        <Text style={ style.textLogo }>
            TASK APP
        </Text>
    </>
  )
}

const style = StyleSheet.create({
    textLogo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#00045E'
    }
})
