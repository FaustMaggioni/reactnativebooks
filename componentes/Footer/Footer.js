import React from 'react'
import {Text,StyleSheet} from 'react-native'
import {AZULES} from '../../constants/colors'

const Footer = ({style, ...props}) => {
    return (
        <Text style={[ styles.footer,style ]}
        {...props}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    footer:{
        height: 'fitContent',
        borderBottomWidth: 0.5,
        backgroundColor: AZULES.dark,
        color: 'white',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width:'100%'
    }
})

export default Footer
