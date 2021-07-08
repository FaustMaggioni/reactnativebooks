import React, {useState} from 'react';
import {View, Text, Button } from 'react-native';
import {styles} from './styles.js'
import Item from './Item/Item'
import Input from './Input/Input'
import Placeholder from '../../componentes/Placeholder/Placeholder'
import Articulo  from '../ArticuloScreen/Articulo.js';
import Lista from '../../componentes/Lista/Lista'


const MiLista = ({navigation}) =>{

    const [visible, setVisible] = useState(false)
    const [articulo, setItem] = useState()
    const [data, setData] = useState([])

    const renderItem = ({ item }) => (
        <Item navigation={navigation} item={item} data={data} setData={setData} />
      );
    
    return (
      <View style={styles.listaContainer}>
      <Input data={data} setData={setData} visible={visible} setVisible={setVisible} />
        <Lista
        style={styles.lista}
        data={data}
        refreshing={false}
        onRefresh={() => setVisible(true)}
        renderItem={renderItem}
        ListEmptyComponent= { <Placeholder title='No has escrito nada aún' subtitle='Refresca para escribir algo!'/> }    
      />
      </View>
    )
}



export default MiLista