import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      textAlign: 'center',
      borderRadius: 15,
    },
    input:{
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    blanco:{
        color:'white'
    },
    todo:{
        textAlign:'center',
        fontSize: 30,
        fontWeight: '700'
    },
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
    title:{
        flex: 1,
        padding: 5,
        fontWeight: '200'
    }
  });