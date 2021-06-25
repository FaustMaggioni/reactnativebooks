import React from 'react'
import {StyleSheet, TextInput} from 'react-native'

const InputGen = ({style ={}, ...props}) => {
    return (
        <TextInput style={ [ styles.input,...style ]}
        {...props}/>
    )
}

const styles = StyleSheet.create({
    input:{
        height: 60,
        borderBottomWidth: 0.5,
        borderRadius: 5,
        margin: 1
    }
})
export default InputGen
