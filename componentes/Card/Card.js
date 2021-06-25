import React from 'react'
import {View,Text, Image} from 'react-native'
import {styles} from './styles.js'

const Card = ({title}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardtext}>
                {title}
            </Text>
            <Image
            style={styles.stretch}
            source={require('../../assets/books.png')}
      />
        </View>
    )
}

export default Card
