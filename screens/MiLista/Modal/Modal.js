import React from 'react';
import { Modal as RNModal, Button, View,  Text } from 'react-native';
import {styles} from './styles.js'
import { useDispatch, useSelector } from 'react-redux';
import { deleteArticulo } from '../../../store/actions/articulo.actions.js';

const Modal = ({item, setItemSelected, setModalVisible, visible}) =>{
    const dispatch = useDispatch()

    const removeItem = (id) =>{
        dispatch(deleteArticulo(id))
        //setData(data => data.filter((item) => item.id !== id))
    }
    const onHandlerDelete = () =>{
        removeItem(item.id)
        setItemSelected({})
        setModalVisible(!visible)
    }

    return(
            <RNModal transparent={true} animationType='slide' visible={visible} >
                    <View style={visible ? [styles.modal, styles.dif] : styles.modal}>
                        <View style={styles.modalItem}>
                        <Text style={styles.txt}> ¿Está seguro que desea borrar {item.title} ? </Text>
                        <View style={styles.botones}>
                            <Button style={styles.btn} title='Cancelar' onPress= {() => setModalVisible(false)}/>
                            <Button style={styles.btn} title='OK' onPress={onHandlerDelete}/>
                        </View>
                        </View>
                     </View>
            </RNModal>
    )
}

export default Modal