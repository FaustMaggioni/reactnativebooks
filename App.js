import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {View, Text } from 'react-native';
import {styles} from './styles.js'
import Lista from './screens/Lista/Lista'
import Header from './componentes/Header/Header'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import Footer from './componentes/Footer/Footer'

const App = () => {

  const [data, setData] = useState([])
  const [dataLoaded] = Font.useFonts({
    'sanspro': require('./assets/fonts/SourceSansPro-Regular.ttf'),
    'sansbold': require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
    'sanslight': require('./assets/fonts/SourceSansPro-Light.ttf'),
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
        <Footer style={styles.txt}>
          Footer 
        </Footer>
        <StatusBar style="auto" />
      </View>
  );
}


export default App