import React, {useState} from 'react'
import {View, Text, TouchableHighlight,Modal,Image,TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions} from 'react-native'
import InputGen from '../../../../componentes/InputStyle/InputGen'
import {styles} from './styles.js'
import { AZULES } from '../../../../constants/colors'

const IngresarArticulo = ({setVisible, visible, setData, data=[]}) => {
    const [title, setTitle] = useState()
    const [subtitle,setSubtitle] = useState()
    
    const addItem = () =>{
        if(title && subtitle){
          setData([...data, {title:title.toUpperCase(), subtitle: subtitle, id: (Math.random()*1000).toString()}])
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
        <Modal animationType='slide' visible={visible} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.form} keyboardVerticalOffset={Dimensions.get('window').height/3} behavior='padding'>
          <Text style={styles.leer}> ¿Qué vas a escribir hoy? </Text>
          <Image style={styles.stretch} source={require('../../../../assets/libros.png')} />
          <InputGen onSubmitEditing= {() => addItem()} style={[styles.title, styles.txtInput] } value={title} onChangeText={setTitle} placeholder='Titulo'/>
          <InputGen  onSubmitEditing= {() => addItem()} style={[styles.title, styles.txtInput] } value={subtitle}  onChangeText={setSubtitle} placeholder='Subtitulo'/>
          <View style={styles.btnContainer}>
          <TouchableHighlight activeOpacity={0.3} underlayColor={AZULES.dark} style={[styles.btn, styles.cancelar]} onPress={() => setVisible(false)}>
              <Text> Cancelar </Text>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={0.3} underlayColor={AZULES.primary} style={[styles.btn, styles.añadir]} onPress={() => addItem()}>
              <Text> Añadir </Text>
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        </Modal>
    )
}

export default IngresarArticulo
