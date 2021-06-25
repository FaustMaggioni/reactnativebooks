import React, {useState}  from 'react'
import { Button, Text, View, TouchableHighlight } from 'react-native';
import {styles} from './styles'
import Modal from './Modal'

const Item = ({ item,data,setData, setItem }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [itemSelected, setItemSelected] = useState({})

    const onHandlerModal = id => {
      setItemSelected(data.find(item => item.id === id))
      setModalVisible(!modalVisible)
    }
            return(
            <View>
              <TouchableHighlight 
                style={styles.touchable}
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => setItem(item)}>
                <>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text> {item.subtitle} </Text>
                </>
              </TouchableHighlight>
              <View style={styles.btns}>
                <Button title='<3'/>
                <Button title='Eliminar' onPress={()=> {
                  onHandlerModal(item.id)}}
                  />
              </View>
              <Modal item={itemSelected} setModalVisible={setModalVisible} setItemSelected={setItemSelected} data={data} setData={setData} visible={modalVisible}/>
            </View>)
        };

export default Item
