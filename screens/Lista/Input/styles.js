import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors'

export const styles = StyleSheet.create({
    input:{
        width: '100%',
        backgroundColor: COLORS.fifth,
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
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: '100%'
    },
    btnContainer:{
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: COLORS.secondary
    },
    container: {
        flex: 1
    },
    btn:{
        borderTopWidth: 0.5,
        borderColor: 'gray',
        backgroundColor: COLORS.secondary
    },
    leer:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '600',
        opacity: 0.8,
    },
    stretch:{
        height: 100,
        width: 100,
        resizeMode: 'cover',
        alignSelf: 'center'
    }
})