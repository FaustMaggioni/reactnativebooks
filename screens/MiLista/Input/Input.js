import React from 'react'
import {View,Text, TouchableHighlight} from 'react-native'
import {styles} from './styles.js'
import IngresarArticulo from './IngresarArticulo/IngresarArticulo.js'
import { AZULES } from '../../../constants/colors.js'

const Input = ({data,setData, visible, setVisible}) => {
    
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <TouchableHighlight style={styles.touchable} activeOpacity={0.3} underlayColor={AZULES.accent} onPress={() => setVisible(true)}>
            <Text style={styles.txtInput}> Añadir </Text>
          </TouchableHighlight>
        </View>
          <IngresarArticulo setVisible={setVisible} visible={visible} setData={setData} data={data} />
      </View>
    )
}

export default Input
