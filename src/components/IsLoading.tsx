import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export const IsLoading = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }}>
        <ActivityIndicator
            size={'large'}
            color={'#00045E'}
        />
    </View>
  )
}
