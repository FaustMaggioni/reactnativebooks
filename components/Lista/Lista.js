import React, {useState} from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import {styles} from './styles.js'
import Modal from './Modal'

const Lista = ({data, setData}) =>{
    const [modalVisible, setModalVisible] = useState(false)
    const [itemSelected, setItemSelected] = useState({})

    const onHandlerModal = id => {
      setItemSelected(data.find(item => item.id === id))
      setModalVisible(!modalVisible)
    }

    const renderItem = ({ item }) => (
        <Item style={styles.title} item={item} />
      );
    const Item = ({ item }) => {
        return(
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Button title='X' onPress={()=> onHandlerModal(item.id)} />
          <Modal item={itemSelected} setModalVisible={setModalVisible} setItemSelected={setItemSelected} data={data} setData={setData} visible={modalVisible}/>
        </View>)
      };
    
    return (
        <FlatList
        style={styles.lista}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    )
}



export default Lista