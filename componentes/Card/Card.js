import React from 'react'
import {View, StyleSheet} from 'react-native'
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
        width: '80%',
        alignSelf: 'center',
        height: 200,
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
        marginTop: '5%',
        marginBottom: '5%'
    }
})

export default Card
