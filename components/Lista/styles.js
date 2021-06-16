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
        borderBottomColor: 'gray'
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
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: 'auto',
        marginBottom: 'auto',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 5,
    },
    botones:{
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    txt:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '300'
    }
  });