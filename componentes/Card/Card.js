import React from 'react'
import {View, StyleSheet, Dimensions} from 'react-native'
import { AZULES } from '../../constants/colors'



const Card = (props) => {
    return (
        <View style={styles.card}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        width: Dimensions.get('window').width/2.5,
        alignSelf: 'center',
        height: 150,
        borderRadius: 15,
        backgroundColor: AZULES.primary,
        shadowColor: "#000",
        shadowOffset: {
            width:3,
            height: 3,
        },
        shadowOpacity: 0.55,
        shadowRadius: 5.84,
        elevation: 5,
        margin: '5%',
    }
})

export default Card
