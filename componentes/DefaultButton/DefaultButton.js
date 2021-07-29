import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native-gesture-handler'
import {AZULES} from '../../constants/colors'
import {HEIGHT,WIDTH} from '../../constants/dimensions'

const DefaultButton = ({label,onPress}) => {
    return (
        <TouchableHighlight style={styles.boton} onPress={onPress}>
            <Text> {label} </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    boton:{
        backgroundColor: AZULES.accent,
        width: WIDTH,
        height: 10,
    }
})

export default DefaultButton
