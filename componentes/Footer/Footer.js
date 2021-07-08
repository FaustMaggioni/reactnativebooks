import React, {useState} from 'react'
import {Image,View,Text,StyleSheet,TouchableHighlight} from 'react-native'
import {AZULES} from '../../constants/colors'

const Footer = () => {
    const initialState = [
        require('../../assets/favoritos.png'),
        require('../../assets/user.png'),
        require('../../assets/inicio.png')
    ]
    const [imgs, setImgs] = useState(initialState)

    return (
        <View style={styles.footer}>
            {imgs.map((img) => {
                return(
                    <TouchableHighlight activeOpacity={0.5} underlayColor={AZULES.accent} onPress={() => console.log('funciona')}>
                        <Image style={styles.img} source={img}/>
                    </TouchableHighlight>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        borderBottomWidth: 0.5,
        backgroundColor: AZULES.light,
        color: 'white',
        alignItems: 'center',
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    img:{
        height: 50,
        width: 50,
        resizeMode: 'contain',
        marginHorizontal: 8,
        marginLeft: 10,
        marginVertical: 5
    }
})

export default Footer
