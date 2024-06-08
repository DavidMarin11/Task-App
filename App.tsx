import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { Register } from './src/register/screen/Register'
import { AuthProvider } from './src/context/authContext'

const App = () => {
  return (
    <AuthProvider>
      <SafeAreaView style={style.container}>
        <StatusBar 
          backgroundColor= 'white'
          barStyle='dark-content'
        />
        <Register />
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
