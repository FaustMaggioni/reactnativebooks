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
        width: '100%',
        backgroundColor: 'white',
        marginTop: 20,
        fontFamily: 'sanslight',
        borderRadius: 20,
        padding: 10
    },
    articulo:{
        height: '100%',
        marginBottom: 10,
        marginTop: 10,
        position: 'relative'
    },
    volver:{
        position: 'absolute',
        right: 5,
        top: 15,
        backgroundColor: AZULES.accent,
        borderRadius: 5,
        height: 30,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }

})