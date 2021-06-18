import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    lista:{
        marginTop: '5%',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 15,
    },
    item:{
        margin: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
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
    date:{
        maxWidth: '90%'
    },
    title:{
        flex: 1,
        padding: 5,
        fontWeight: '500'
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
        fontWeight: '300'
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