import React from 'react'
import {ScrollView, Text, TouchableHighlight} from 'react-native'
import {styles} from './styles'
import { useSelector } from 'react-redux'

const dummyText = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
const Articulo = ({navigation, route}) => {
    const {title,subtitle} = useSelector(state => state.screen.selected)
    return (
        <ScrollView style={styles.articulo}>
            <Text style={styles.subtitle}> {subtitle} </Text>
            <Text style={styles.body}> {dummyText} </Text>
        </ScrollView>
    )
}

export default Articulo
