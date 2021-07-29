import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import {styles} from './styles.js'
import Item from './Item/Item'
import Placeholder from '../../componentes/Placeholder/Placeholder'
import Lista from '../../componentes/Lista/Lista'
import { showForm } from '../../store/actions/ingresar.actions.js';
import {getArticulos} from  '../../store/actions/articulo.actions'



const MiLista = ({navigation}) =>{


    const data = useSelector(state => state.articulos)
    const dispatch = useDispatch()
    
    const ingresar = () => {
      dispatch(showForm())
    }
    
    useEffect(() => {
      dispatch(getArticulos())
    },[])

    const renderItem = ({ item }) => (
        <Item navigation={navigation} item={item}  />
      );

    return (
      <View style={styles.listaContainer}>
        <Lista
        style={styles.lista}
        data={data}
        numColumns={2}
        refreshing={false}
        renderItem={renderItem}
        ListEmptyComponent= { <Placeholder title='No hay nada por aquí'/> }    
      />
      </View>
    )
}



export default MiLista