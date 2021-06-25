import React, {useState} from 'react'
import {View,Button,TouchableHighlight,Modal,Image, Text, KeyboardAvoidingView,TouchableWithoutFeedback, Keyboard} from 'react-native'
import {styles} from './styles.js'
import InputGen from '../../../componentes/InputStyle/InputGen'



const Input = ({data,setData, visible, setVisible}) => {

    const [title, setTitle] = useState()
    const [subtitle,setSubtitle] = useState()

    const addItem = () =>{
        if(title && subtitle){
          setData([...data,{title:title.toUpperCase(), subtitle: subtitle, id: (Math.random()*1000).toString()}])
          setTitle()
          setSubtitle()
          setVisible(false)
        }else{
          if(!title && !subtitle){
            alert('Titulo y subtitulo vacíos')
          }else{
            if(!title){
              alert('Titulo vacío')
            }else{
              alert('Subtitulo vacío')
            }
          }
        }
      }
    
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Button  title='Añadir' onPress={() => setVisible(true)}/>
        </View>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Modal animationType='slide' visible={visible} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.form}>
          <Text style={styles.leer}> ¿Con qué artículo nos vas a deleitar hoy? </Text>
          <Image
            style={styles.stretch}
            source={require('../../../assets/libros.png')}
            />
          <InputGen  
              onSubmitEditing= {() => addItem()}
              style={[styles.title, styles.txtInput] }
              value={title} 
              onChangeText={setTitle} 
              placeholder='Titulo'/>
          <InputGen  
              onSubmitEditing= {() => addItem()}
              style={[styles.title, styles.txtInput] }
              value={subtitle} 
              onChangeText={setSubtitle} 
              placeholder='Subtitulo'/>
          <View style={styles.btnContainer}>
          <TouchableHighlight style={[styles.btn, styles.cancelar]} onPress={() => setVisible(false)}>
              <Text> Cancelar </Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.btn, styles.añadir]} onPress={() => addItem()}>
              <Text> Añadir </Text>
            </TouchableHighlight>
          </View>
        </View>
        </TouchableWithoutFeedback>
        </Modal>
        </KeyboardAvoidingView>
        </View>
    )
}

export default Input
