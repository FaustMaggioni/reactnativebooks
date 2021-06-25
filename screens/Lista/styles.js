import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors'

export const styles = StyleSheet.create({
    lista:{
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80%',
        borderRadius: 15,
        height: '80%'
    },
    item:{
        marginVertical: '7%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: COLORS.secondary,
        borderRadius: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    btns:{
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.15)',
        width: '100%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        justifyContent: 'center',
        marginTop: '5%'
    },
    title:{
        flex: 1,
        padding: 5,
        fontWeight: '500',
    },
    modalItem:{
        backgroundColor: 'white',
        justifyContent: 'center',
        width: '80%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 50,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 30,
        elevation: 5,
    },
    botones:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopColor: 'gray',
        borderTopWidth: 0.5,
        textAlign: 'center'
    },
    txt:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400'
    },
    btn:{
        flex: 1,
        textAlign: 'center',
        borderWidth: 0.5,
        borderColor: 'gray'
    },
    dif:{
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    modal:{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    }
  });