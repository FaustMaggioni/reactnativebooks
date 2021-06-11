import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, FlatList, Text, View, TextInput, ImageBackground, SafeAreaView } from 'react-native';
import {styles} from './styles.js'

const dataAux =[
  {
    title: 'Bases de datos',
    id: 'bd'
  },
  {
    title: 'Estadística',
    id: 'pye'
  },
  {
    title: 'Coderhouse',
    id: 'ch'
  }
]


const App = () => {

  const [text, setText] = useState('')
  const [data, setData] = useState(dataAux)

  const renderItem = ({ item }) => (
    <Item style={styles.title} title={item.title} />
  );

  const addItem = () =>{
    if(text){
    {setData([...data,{title:text.toUpperCase(), id: text}])
    setText('')}}
  }

  const removeItem = (title) =>{
    console.log(title)
    const aux = data.filter((item) => item.title !== title)
    setData([...aux])
    console.log(data)
  }

  const Item = ({ title }) => {

    const[t, setT]= useState(title)

    return(
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Button onPress={() => removeItem(t)} title='X'/>
    </View>)

  };

  return (
    
      <ImageBackground 
          source={{uri:'https://www.designer-daily.com/wp-content/uploads/2016/12/french-surrealism-illustrations-guy-billout-13.jpg'}} 
          style={styles.container}>
        <SafeAreaView>
        <Text style={styles.todo}> To do List </Text>
        <View style={styles.input}>
          <TextInput style={[styles.title, styles.blanco]}  value={text} onChangeText={setText} placeholder='To do'/>
          <Button title='AÑADIR' onPress={addItem}/>
        </View>
        <FlatList
          style={styles.lista}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        </SafeAreaView>
      <StatusBar style="auto" />
      </ImageBackground>
      
  );
}

export default App