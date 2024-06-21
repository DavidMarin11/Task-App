import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { RegisterScreen } from './src/register/screen/RegisterScreen'
import { AuthProvider } from './src/context/authContext'
import { LoginScreen } from './src/login/screen/LoginScreen'
import { StackNavigate } from './src/routes/StackNavigate'
import { TasksScreen } from './src/tasks/screen/TasksScreen'

const App = () => {
  return (
    <AuthProvider>
      <SafeAreaView style={style.container}>
        <StatusBar 
          backgroundColor= 'white'
          barStyle='dark-content'
        />
        {/* <RegisterScreen /> */}
        {/* <LoginScreen /> */}
        <StackNavigate />
        {/* <TasksScreen /> */}

      </SafeAreaView>
    </AuthProvider>
    )
      
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;
