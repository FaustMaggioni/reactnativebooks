import React from 'react'
import {ScrollView, Text, TouchableHighlight} from 'react-native'
import {styles} from './styles'


const dummyText = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
const Articulo = ({title,subtitle, setItem}) => {
    return (
        <ScrollView style={styles.articulo}>
            <Text style={styles.title}> {title} </Text>
            <Text style={styles.subtitle}> {subtitle} </Text>
            <Text style={styles.body}> {dummyText} </Text>
            <TouchableHighlight 
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                style={styles.volver} onPress={()=> setItem()}>
                <Text style={styles.floating}> Volver </Text>
            </TouchableHighlight>
        </ScrollView>
    )
}

export default Articulo
