import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../login/screen/LoginScreen';
import { RegisterScreen } from '../register/screen/RegisterScreen';

const Stack = createStackNavigator();

export const StackNavigate = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="login" component={ LoginScreen } options={{ headerShown: false }}/>
        <Stack.Screen
        name="register"
        component={ RegisterScreen }
        options={{ 
          headerTitle: '',
          headerStyle: {
              elevation: 0
            }
        }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
