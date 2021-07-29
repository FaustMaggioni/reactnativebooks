import React from 'react';
import {View, Text } from 'react-native';
import {styles} from './styles.js'

const Header = () =>{
    return (
        <View style={styles.header}>
            <Text style={styles.todo}> Medium </Text>
        </View>
    )
}

export default Header