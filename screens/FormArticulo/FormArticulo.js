import React, {useState} from 'react'
import {
  View, 
  Text, 
  TouchableHighlight,
  TouchableWithoutFeedback, 
  Keyboard, 
  KeyboardAvoidingView, 
  Dimensions} 
from 'react-native'
import InputGen from '../../componentes/InputStyle/InputGen'
import {styles} from './styles'
import {AZULES} from '../../constants/colors'

const FormArticulo = ({navigation}) => {

    const [title, setTitle] = useState()
    const [subtitle,setSubtitle] = useState()

    const handleAddItem = () => {
      if(title && subtitle){
        setTitle()
        setSubtitle()
        navigation.navigate('Body', {
          title,
          subtitle,
        })
      }else{
        alert('Complete todos los campos')
      }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={styles.form} keyboardVerticalOffset={Dimensions.get('window').height/4} behavior='padding'>
          <Text style={styles.leer}> ¿Qué vas a escribir hoy? </Text>
          <InputGen onSubmitEditing= {handleAddItem} style={[styles.title, styles.txtInput] } value={title} onChangeText={setTitle} placeholder='Titulo'/>
          <InputGen  onSubmitEditing= {handleAddItem} style={[styles.title, styles.txtInput] } value={subtitle}  onChangeText={setSubtitle} placeholder='Subtitulo'/>
           <View style={styles.btnContainer}>
            <TouchableHighlight activeOpacity={0.3} underlayColor={AZULES.primary} style={[styles.btn, styles.añadir]} onPress={handleAddItem}>
              <Text> Siguiente </Text>
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default FormArticulo
