import React, {useState} from 'react'
import {Button, TextInput,View} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import addItem from './addItem'
import styles from './styles'

const FormBody = ({navigation,route}) => {
    const [body,setBody] = useState()
    const {title,subtitle} = route.params
    const dispatch = useDispatch()
    const loggedIn = useSelector(state => state.auth.token) 

    const handleSubmit = () => {
        if(body) {
            try{
                addItem(title, subtitle, body, loggedIn, dispatch)
                setBody('')
                navigation.navigate('Form')
                alert('Agreado con éxito!')
            }catch(error){
                alert('Ha ocurrido un error')
            }
         } else{
            alert('Escriba algo')
         }
    }

    return (
                <View>
                <TextInput 
                onChangeText={setBody}
                value={body}
                style={styles.input}
                multiline={true}
                numberOfLines={10}
                />
                <Button onPress={handleSubmit} title={'Submit'}/>
                </View>
    )
}

export default FormBody
