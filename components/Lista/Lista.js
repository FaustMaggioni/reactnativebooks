import React from 'react';
import {FlatList } from 'react-native';
import {styles} from './styles.js'
import Item from './Item'

const Lista = ({data, setData}) =>{

    const renderItem = ({ item }) => (
        <Item style={styles.title} item={item} data={data} setData={setData} />
      );


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