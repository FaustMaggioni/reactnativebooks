import {StyleSheet} from 'react-native';
import {COLORS, AZULES} from '../../../constants/colors'

export const styles = StyleSheet.create({
    input:{
        width: '100%',
        backgroundColor: AZULES.accent,
        alignItems: 'center'
    },
    add:{
        color:'white',
        textAlign: 'center',
        marginHorizontal: 'auto',
        backgroundColor: 'rgba(0,0,0,0.1)',
        fontSize: 20,
        borderRadius: 5
    },
    title:{
        padding: 5,
        fontWeight: '500',
        color: 'black'
    },
    txtInput:{
        backgroundColor: 'white',
        marginTop: 6
    },
    form:{
        backgroundColor: AZULES.light,
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: '100%'
    },
    btnContainer:{
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: 'gainsboro',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    container: {
        flex: 1
    },
    btn:{
        borderTopWidth: 0.5,
        borderColor: 'gray',
        flex: 1,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    añadir:{
        backgroundColor: AZULES.accent,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    cancelar:{
        backgroundColor: AZULES.primary,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    leer:{
        textAlign: 'center',
        fontSize: 30,
        color: AZULES.primary,
        fontWeight: '600',
        fontFamily: 'sansbold',
        opacity: 0.8,
    },
    stretch:{
        height: 100,
        width: 100,
        resizeMode: 'cover',
        alignSelf: 'center'
    }
})