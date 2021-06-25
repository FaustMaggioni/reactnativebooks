import React, {useState} from 'react';
import {FlatList, View, Button } from 'react-native';
import {styles} from './styles.js'
import Item from './Item'
import Input from './Input/Input'
import Placeholder from '../../componentes/Placeholder/Placeholder'
import Articulo  from '../ArticuloScreen/Articulo.js';

const Lista = ({data, setData}) =>{

    const [visible, setVisible] = useState(false)
    const [articulo, setItem] = useState()

    const renderItem = ({ item }) => (
        <Item style={styles.title} setItem={setItem} item={item} data={data} setData={setData} />
      );
    
    if(articulo){
      return(
        <Articulo setItem={setItem} title={articulo.title} subtitle={articulo.subtitle}/>
      )
    }

    return (
      <View style={styles.listaContainer}>
      <Input data={data} setData={setData} visible={visible} setVisible={setVisible} />
        <FlatList
        style={styles.lista}
        data={data}
        refreshing={false}
        onRefresh={() => setVisible(true)}
        ListEmptyComponent= { <Placeholder title='No has escrito nada aún' subtitle='Refresca para escribir algo!'/> }
        extraData={item => item.id}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>
    )
}



export default Lista