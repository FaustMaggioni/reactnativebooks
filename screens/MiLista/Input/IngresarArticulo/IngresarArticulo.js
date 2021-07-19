import React, {useState} from 'react'
import {View, Text, TouchableHighlight,Modal,Image,TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions} from 'react-native'
import InputGen from '../../../../componentes/InputStyle/InputGen'
import {styles} from './styles.js'
import { useDispatch, useSelector } from 'react-redux'
import { AZULES } from '../../../../constants/colors'
import {addArticulo} from '../../../../store/actions/articulo.actions'
import { hideForm } from '../../../../store/actions/ingresar.actions'

const IngresarArticulo = () => {
    const [title, setTitle] = useState()
    const [subtitle,setSubtitle] = useState()
    const dispatch = useDispatch()
    const visible = useSelector(state => state.ingresar.mostrar)

    const addItem = () =>{
        if(title && subtitle){
          //setData([...data, {title:title.toUpperCase(), subtitle: subtitle, id: (Math.random()*1000).toString()}])
          const nuevoItem = {
            title:title.toUpperCase(), 
            subtitle: subtitle, 
            id: (Math.random()*1000).toString()
          }
          dispatch(addArticulo(nuevoItem))
          setTitle()
          setSubtitle()
          dispatch(hideForm())
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

    const cancelar = () =>{
      dispatch(hideForm())
    }

    return (
        <Modal animationType='slide' visible={visible} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.form} keyboardVerticalOffset={Dimensions.get('window').height/4} behavior='padding'>
          <Text style={styles.leer}> ¿Qué vas a escribir hoy? </Text>
          <Image style={styles.stretch} source={require('../../../../assets/libros.png')} />
          <InputGen onSubmitEditing= {() => addItem()} style={[styles.title, styles.txtInput] } value={title} onChangeText={setTitle} placeholder='Titulo'/>
          <InputGen  onSubmitEditing= {() => addItem()} style={[styles.title, styles.txtInput] } value={subtitle}  onChangeText={setSubtitle} placeholder='Subtitulo'/>
          <View style={styles.btnContainer}>
          <TouchableHighlight activeOpacity={0.3} underlayColor={AZULES.dark} style={[styles.btn, styles.cancelar]} onPress={cancelar}>
              <Text> Cancelar </Text>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={0.3} underlayColor={AZULES.primary} style={[styles.btn, styles.añadir]} onPress={addItem}>
              <Text> Añadir </Text>
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        </Modal>
    )
}

export default IngresarArticulo
