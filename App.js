import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {View } from 'react-native';
import {styles} from './styles.js'
import Lista from './screens/Lista/Lista'
import Header from './componentes/Header/Header'
import GameScreen from './screens/GameScreen/GameScreen'

const App = () => {

  const [data, setData] = useState([])
  const [game,setGame] = useState(false)

  return (
      <View style={styles.container} >
        <Header/>
        <Lista data={data} setGame={setGame} ssetData={setData} />
        <StatusBar style="auto" />
      </View>
  );
}

export default App