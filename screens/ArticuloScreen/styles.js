import {StyleSheet} from 'react-native';
import {COLORS, AZULES} from '../../constants/colors'

export const styles = StyleSheet.create({

    title:{
        fontFamily: 'sansbold',
        fontSize: 40,
    },
    subtitle:{
        fontFamily: 'sanspro',
        fontSize: 30,
        textAlign: 'center'
    },
    body:{
        textAlign: 'left',
        width: '90%',
        backgroundColor: 'white',
        marginLeft: 15,
        marginTop: 20,
        fontFamily: 'sanslight',
        borderRadius: 20
    },
    articulo:{
        height: '80%',
        marginBottom: 50
    },
    volver:{
        position: 'absolute',
        right: 5,
        top: 15,
        backgroundColor: AZULES.accent,
        borderRadius: 5,
        height: 30,
        justifyContent: 'center'
    }

})