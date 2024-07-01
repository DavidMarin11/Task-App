import React, { useEffect } from 'react'
import { Controller } from 'react-hook-form';
import { Modal, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


interface Props {
    modalTask: boolean;
    control: any;
    addTask: () => void;
    errors: any;
    setModalTask: any;
}

export const ModalTaskInputs = ({modalTask, control, addTask, errors, setModalTask}: Props) => {
  return (
    <>
        <Modal
            visible={modalTask}
            animationType='slide'
            transparent={true}
            onRequestClose={() => setModalTask(false)}
        >
            <View style={style.viewModal}>
                <View>
                <TouchableOpacity
                onPress={() => setModalTask(false)}
                style={style.touchableModal}
                >
                </TouchableOpacity>
                </View>
                <View style={style.contentModal}>
                        <Controller
                            control= {control}
                            name = 'title'
                            rules= {{
                                required: {
                                    value: true,
                                    message: 'El título es obligatorio'
                                },
                                minLength: {
                                    value: 3,
                                    message: 'El título debe de ser de mas 3 caracteres'
                                }
                            }}
                            render={({field:{ value, onChange, onBlur}, fieldState: {error}}) => (
                                <TextInput 
                                    style={[style.inputTitle, {borderColor: error ? 'red' : '#ccc'}]}
                                    placeholder= 'Título de la tarea'
                                    value={ value }
                                    onChangeText={ onChange }
                                    onBlur={ onBlur }
                                />
                            )}
                        />
                        {
                            errors && <Text style={{color: 'red'}}>{(errors.message?.toString())}</Text>
                        }
                         <Controller
                            control= {control}
                            name = 'description'
                            rules= {{
                                required: {
                                    value: true,
                                    message: 'El título es obligatorio'
                                },
                                minLength: {
                                    value: 3,
                                    message: 'El título debe de ser de mas 3 caracteres'
                                }
                            }}
                            render={({field:{ value, onChange, onBlur}, fieldState: {error}}) => (
                                <TextInput 
                                    style={[style.inputDescription, {borderColor: error ? 'red' : '#ccc'}]}
                                    placeholder= 'Descripción de la tarea'
                                    multiline={true}
                                    value={ value }
                                    onChangeText={ onChange }
                                    onBlur={ onBlur }
                                />
                            )}
                        />
                        {
                            errors && <Text style={{color: 'red'}}>{(errors.message?.toString())}</Text>
                        }
                        <View style={{marginTop: 30}}>
                            <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={addTask}
                            >
                                <Text>
                                    <Icon name='add-circle-outline' size={70} color="white"/>
                                </Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
        </Modal>
    </>
  )
}

const style = StyleSheet.create({
    viewModal: {
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'flex-end'
    },
    contentModal: {
        width: '100%',
        height: '50%',
        backgroundColor: '#282B70',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        paddingTop: 50
    },
    inputTitle: {
        borderWidth: 1,
        width: '70%',
        height: 40,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white'
    },
    inputDescription: {
        borderWidth: 1,
        width: '70%',
        height: 80,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white'
    },
    touchableModal: {
        height:'100%'
    }
})
