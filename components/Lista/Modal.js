import React from 'react';
import { Modal as RNModal, Button, SafeAreaView, View,  Text } from 'react-native';
import {styles} from './styles.js'

const Modal = ({item, data, setItemSelected, setModalVisible, setData, visible}) =>{
    
    const removeItem = (id) =>{
        setData(data => data.filter((item) => item.id !== id))
    }
    const onHandlerDelete = () =>{
        removeItem(item.id)
        setItemSelected({})
        setModalVisible(!visible)
    }

    return(
            <RNModal transparent={true} animationType='slide' visible={visible} >
                    <View style={styles.modalItem}>
                        <Text style={styles.txt}> ¿Está seguro que desea borrar {item.title} ? </Text>
                        <View style={styles.botones}>
                            <Button title='CONFIRMAR' onPress={onHandlerDelete}/>
                            <Button title='Volver atrás' onPress= {() => setModalVisible(false)}/>
                        </View>
                    </View>
            </RNModal>
    )
}

export default Modal