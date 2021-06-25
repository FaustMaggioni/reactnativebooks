import React from 'react'
import {View,Text, Image} from 'react-native'
import {styles} from './styles.js'

const Placeholder = ({title,subtitle}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>
                {title}
            </Text>
            <Text style={styles.cardSubtitle}>
                {subtitle}
            </Text>
            <Image
            style={styles.stretch}
            source={require('../../assets/books.png')}
            />
        </View>
    )
}

export default Placeholder
