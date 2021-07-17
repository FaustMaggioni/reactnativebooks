import React, {useState} from 'react';
import {View, Text, Button } from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import {styles} from './styles.js'
import Item from './Item/Item'
import Input from './Input/Input'
import Placeholder from '../../componentes/Placeholder/Placeholder'
import Articulo  from '../ArticuloScreen/Articulo.js';
import Lista from '../../componentes/Lista/Lista'
import { showForm } from '../../store/actions/ingresar.actions.js';


const MiLista = ({navigation}) =>{


    const data = useSelector(state => state.articulos)
    const dispatch = useDispatch()

    const renderItem = ({ item }) => (
        <Item navigation={navigation} item={item}  />
      );
    const ingresar = () => {
      dispatch(showForm())
    }
    return (
      <View style={styles.listaContainer}>
      <Input />
        <Lista
        style={styles.lista}
        data={data}
        refreshing={false}
        onRefresh={() => ingresar}
        renderItem={renderItem}
        ListEmptyComponent= { <Placeholder title='No has escrito nada aún' subtitle='Refresca para escribir algo!'/> }    
      />
      </View>
    )
}



export default MiLista