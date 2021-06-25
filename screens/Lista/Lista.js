import React, {useState} from 'react';
import {FlatList, View, Button } from 'react-native';
import {styles} from './styles.js'
import Item from './Item'
import Input from './Input/Input'
import Card from '../../componentes/Card/Card'
 
const Lista = ({data, setData, setGame}) =>{

    const [visible, setVisible] = useState(false)
    
    const renderItem = ({ item }) => (
        <Item style={styles.title} item={item} data={data} setData={setData} />
      );


    return (
      <View style={styles.listaContainer}>
      <Input data={data} setData={setData} visible={visible} setVisible={setVisible} />
        <FlatList
        style={styles.lista}
        data={data}
        refreshing={false}
        onRefresh={() => setVisible(true)}
        ListEmptyComponent= { <Card title='Refresca para agregar un libro'/> }
        extraData={item => item.id}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>
    )
}



export default Lista