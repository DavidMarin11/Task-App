import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, FlatList, ScrollView, Modal } from 'react-native'
import { style } from '../styles/styleTasks'
import { Logo } from '../../components/Logo'
import { ModalTaskInputs } from '../components/ModalTaskInputs';
import { useForm } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { IsLoading } from '../../components/IsLoading';

export const TasksScreen = () => {
  const [modalTask, setModalTask] = useState<boolean>(false)
  const [deleteModal, setDeleteModal] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [titleDelete, setTitleDelete] = useState<string>('');
  const [tasksList, setTasksList] = useState();
  const {control, reset, handleSubmit,formState: { errors }} = useForm();

  const addTask  = handleSubmit(async (data) => {
      setIsLoading(true);
      let tasks = await AsyncStorage.getItem('tasks');
      let tasksLi = [];

      if (tasks != null) {
        tasksLi = JSON.parse(tasks);
        tasksLi.push(data);
      } else {
        tasksLi.push(data);
      }

      await AsyncStorage.setItem('tasks', JSON.stringify(tasksLi))
      setModalTask(false);
      setTasksList(tasksLi);
      reset();
      setIsLoading(false);
  })

  const deleteTask = async (titleDetele: string) => {
    let tasks = await AsyncStorage.getItem('tasks');
    let tasksLi = [];

    if (tasks != null) {
      tasksLi = JSON.parse(tasks);
      const newTasks = tasksLi.filter((tas:any) => tas.title !== titleDetele);
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks))
    }

    tasks = await AsyncStorage.getItem('tasks');
    if (tasks != null) {
      setDeleteModal(false);
      tasksLi = JSON.parse(tasks)
      setTasksList(JSON.parse(tasksLi))
    }
  }

  useEffect(() => {
    const tasksTodo = async () => {
      let tasksTodos = await AsyncStorage.getItem('tasks');
      if (tasksTodos != null) {
        setTasksList(JSON.parse(tasksTodos))
      }
    }

    tasksTodo();
    
  },[tasksList]);

  const listTasks = (title: string, description:string) => (
    <View style={{flexDirection: 'row'}}>
      <View style={style.contentTasksList}>
        <View style={style.tasksViewText}>
          <Text style={style.titleText}>{title}</Text>
          <Text style={style.descriptionText}>{description}</Text>
        </View>
      </View>
      <View style={{flex: 1,justifyContent: 'center'}}>
        <View style={{justifyContent:'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{padding: 5}}
            onPress={() => confirmDelete(title, true)}
          >
            <Text>
              <Icon name='trash-outline' size={30} color="#00045E" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const confirmDelete = (title: string, confirmModal:boolean) => {
    setDeleteModal(true);
    setTitleDelete(title);
  }

  if (isLoading) return <IsLoading />

  return (
    <View style={ style.content }>
        <View style={ style.contentLogo }>
            <Logo />
        </View>
        <View style={style.addConten}>
          <TouchableOpacity
          onPress={() => setModalTask(true)}
          style={style.addBotton}
          >
            <Text style={[style.addText,{marginRight: 10}]}>
              +
            </Text>
            <Text style={style.addText}>
              Add Task
            </Text>
          </TouchableOpacity>
        </View>
        <ModalTaskInputs
          modalTask={modalTask}
          control={control}
          addTask={addTask}
          errors={errors}
          setModalTask={setModalTask}
        />
        <View style={style.contentFlastList}>
          <FlatList 
              data={tasksList}
              renderItem={({item}) => listTasks(item.title, item.description)}
              keyExtractor={item => item.title}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 20}}
          />
        </View>
        <Modal
          visible={deleteModal}
          animationType='fade'
          transparent={true}
          onRequestClose={() => setDeleteModal(false)}
        >
          <View style={style.modalDelete}>
              <View style={style.contentModalDelete}>
                <Text>¿Esta seguro de eliminar la tarea?</Text>
                <TouchableOpacity
                  style={{padding: 5}}
                  onPress={() => deleteTask(titleDelete)}
                >
                  <Text style={{marginTop: 10}}>
                  <Icon name='trash-outline' size={30} color="#ff0000" />
                </Text>
                </TouchableOpacity>
                
              </View>
          </View>
        </Modal>
    </View>
  )
}
