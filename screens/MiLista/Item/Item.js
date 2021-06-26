import React, {useState}  from 'react'
import { Button, Text, View, TouchableHighlight } from 'react-native';
import {styles} from './styles'
import Modal from '../Modal/Modal'
import { AZULES } from '../../../constants/colors';
import Card from '../../../componentes/Card/Card';

const Item = ({ item,data,setData, setItem }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [itemSelected, setItemSelected] = useState({})

    const onHandlerModal = () => {
      setItemSelected(item)
      setModalVisible(!modalVisible)
    }
            return(
            <Card >
              <TouchableHighlight style={styles.touchable} activeOpacity={0.3} underlayColor={AZULES.accent} onPress={() => setItem(item)}>
                <>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}> {item.subtitle} </Text>
                </>
              </TouchableHighlight>
              <View style={styles.btns}>
                <Button title='<3'/>
                <Button title='Eliminar' onPress={()=> {onHandlerModal(item.id)}} />
              </View>
              <Modal item={itemSelected} setModalVisible={setModalVisible} setItemSelected={setItemSelected} data={data} setData={setData} visible={modalVisible}/>
            </Card>)
        };

export default Item
