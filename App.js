import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {View } from 'react-native';
import {styles} from './styles.js'
import Lista from './screens/Lista/Lista'
import Header from './componentes/Header/Header'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'


const App = () => {

  const [data, setData] = useState([])
  const [dataLoaded] = Font.useFonts({
    'benne': require('./assets/fonts/Benne-Regular.ttf')
  })
  if(!dataLoaded){
    return(
      <AppLoading/>
    )
  }
  return (
      <View style={styles.container} >
        <Header/>
        <Lista data={data} setData={setData} />
        <StatusBar style="auto" />
      </View>
  );
}

export default App