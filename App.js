import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Alert, Text, ImageBackground, SafeAreaView } from 'react-native';
import {styles} from './styles.js'
import Lista from './components/Lista/Lista'
import Input from './components/Input/Input'

const App = () => {

  const [data, setData] = useState([])

  return (
      <ImageBackground 
          source={{uri:'https://as1.ftcdn.net/v2/jpg/04/33/02/70/1000_F_433027063_nt4vcWP3bvFxuPvAmfXXZYsR73DQmCgQ.jpg'}} 
          style={styles.container}>
        <SafeAreaView >
        <Text style={styles.todo}> Our Reads </Text>
        <Input data={data} setData={setData} />
        <Lista data={data} setData={setData} />
        </SafeAreaView>
      <StatusBar style="auto" />
      </ImageBackground>
      
  );
}

export default App