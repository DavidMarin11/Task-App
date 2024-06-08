import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { Register } from './src/register/screen/Register'
import { AuthProvider } from './src/context/authContext'
import { Login } from './src/login/screen/Login'

const App = () => {
  return (
    <AuthProvider>
      <SafeAreaView style={style.container}>
        <StatusBar 
          backgroundColor= 'white'
          barStyle='dark-content'
        />
        {/* <Register /> */}
        <Login />
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
