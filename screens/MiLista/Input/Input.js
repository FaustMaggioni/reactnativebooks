import React from 'react'
import {View,Text, TouchableHighlight} from 'react-native'
import {styles} from './styles.js'
import {useSelector, useDispatch} from 'react-redux'
import IngresarArticulo from './IngresarArticulo/IngresarArticulo.js'
import { AZULES } from '../../../constants/colors.js'
import {showForm} from '../../../store/actions/ingresar.actions'

const Input = () => {
    const dispatch = useDispatch()

    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <TouchableHighlight style={styles.touchable} activeOpacity={0.3} underlayColor={AZULES.accent} onPress={() => dispatch(showForm())}>
            <Text style={styles.txtInput}> Añadir </Text>
          </TouchableHighlight>
        </View>
          <IngresarArticulo   />
      </View>
    )
}

export default Input
