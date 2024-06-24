import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { AuthProvider } from './src/context/authContext'
import { Navigate } from './src/routes/Navigate'
import { useEffect, useState } from 'react';
import { InitialScreen } from './src/initial/screen/InitialScreen';

const App = () => {
  const [initial, setInitial] = useState<boolean>(true);

  useEffect(() => {
      setTimeout(() =>
      {
        setInitial(false);
      }, 1000);
  })

  if (initial) return <InitialScreen />

  return (
    <AuthProvider>
      <SafeAreaView style={style.container}>
        <StatusBar 
          backgroundColor= 'white'
          barStyle='dark-content'
        />
        <Navigate />
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
