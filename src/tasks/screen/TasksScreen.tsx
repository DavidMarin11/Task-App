import React from 'react'
import { View } from 'react-native'
import { style } from '../styles/styleTasks'
import { Logo } from '../../components/Logo'
import Icon from 'react-native-vector-icons/Ionicons';

export const TasksScreen = () => {
  return (
    <View style={ style.content }>
        <View style={ style.contentLogo }>
            <Logo />
        </View>
        <View>
           <Icon />
        </View>
    </View>
  )
}
