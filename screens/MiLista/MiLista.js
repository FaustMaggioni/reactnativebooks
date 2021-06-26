import React, {useState} from 'react';
import {View } from 'react-native';
import {styles} from './styles.js'
import Item from './Item/Item'
import Input from './Input/Input'
import Placeholder from '../../componentes/Placeholder/Placeholder'
import Articulo  from '../ArticuloScreen/Articulo.js';
import Lista from '../../componentes/Lista/Lista'


const MiLista = ({data, setData}) =>{

    const [visible, setVisible] = useState(false)
    const [articulo, setItem] = useState()

    const renderItem = ({ item }) => (
        <Item  setItem={setItem} item={item} data={data} setData={setData} />
      );
    
    if(articulo){
      return(
        <Articulo setItem={setItem} title={articulo.title} subtitle={articulo.subtitle}/>
      )
    }

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