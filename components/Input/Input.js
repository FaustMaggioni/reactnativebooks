import React, {useState} from 'react'
import {View,Button,TextInput} from 'react-native'
import {styles} from './styles.js'

const Input = ({data,setData}) => {

    const [text, setText] = useState()

    const addItem = (text) =>{
        if(text){
          setData([...data,{title:text.toUpperCase(),id: (Math.random()*1000).toString()}])
          setText('')
        }else{
          Alert.alert("Input vacío", "Ingrese una tarea a su lista")
        }
      }
    
    return (
        <View style={styles.input}>
          <TextInput  
            onSubmitEditing={() => addItem(text)}
            style={[styles.title, styles.blanco]} 
            value={text} 
            onChangeText={setText} 
            placeholder='To do'/>
          <Button title='AÑADIR' onPress={() => addItem(text)}/>
        </View>
    )
}

export default Input
