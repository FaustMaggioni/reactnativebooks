import {StyleSheet} from 'react-native';
import {AZULES} from '../../../constants/colors'


export const styles = StyleSheet.create({

    
    title:{
        fontFamily: 'sansbold',
        fontSize: 25
    },
    subtitle:{
        fontFamily: 'sanspro',
        fontSize: 15
    },
    btns:{
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.15)',
        width: '100%',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent: 'space-around',
    },

    touchable:{
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },



})