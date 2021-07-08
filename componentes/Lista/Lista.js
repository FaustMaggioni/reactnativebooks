import React from 'react'
import {FlatList, StyleSheet} from 'react-native'


const Lista = ({style={}, data, renderItem, ...props}) => {
    return (
        <FlatList 
        style={[style, styles.lista]}
        extraData={item => item.id}
        keyExtractor={item => item.id}
        data={data}
        renderItem={renderItem}
        {...props}
        />
    )

}


const styles = StyleSheet.create({
    lista:{
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        borderRadius: 10,
    }
})


export default Lista
