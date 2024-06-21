import React from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'

export const ModalMessage = () => {
  return (
    <>
        <Modal
            visible={true}
            animationType='slide'
            transparent={true}
        >
            <View style={style.modalContainer}>
                <View style={style.modalView}>
                    <Text>El correo ingresado ya se encuentra registrado</Text>
                </View>
            </View>
        </Modal>
    </>
  )
}

const style = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    modalView: {
        width: 250,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10
    }
})
