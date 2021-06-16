import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, Alert, Text, View, TextInput, ImageBackground, SafeAreaView } from 'react-native';
import {styles} from './styles.js'
import Lista from './components/Lista/Lista'

const App = () => {

  const [text, setText] = useState('')
  const [data, setData] = useState([])

  const addItem = () =>{
    if(text){
      setData([...data,{title:text.toUpperCase(),id: (Math.random()*1000).toString()}])
      setText('')
    }else{
      Alert.alert("Input vacío", "Ingrese una tarea a su lista")
    }
  }

  return (
    
      <ImageBackground 
          source={{uri:'https://www.designer-daily.com/wp-content/uploads/2016/12/french-surrealism-illustrations-guy-billout-13.jpg'}} 
          style={styles.container}>
        <SafeAreaView>
        <Text style={styles.todo}> To do List </Text>
        <View style={styles.input}>
          <TextInput style={[styles.title, styles.blanco]} value={text} onChangeText={setText} placeholder='To do'/>
          <Button title='AÑADIR' onPress={addItem}/>
        </View>
        <Lista data={data} setData={setData} />
        </SafeAreaView>
      <StatusBar style="auto" />
      </ImageBackground>
      
  );
}

export default App