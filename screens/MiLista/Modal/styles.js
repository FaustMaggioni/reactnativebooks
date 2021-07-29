import { StyleSheet } from "react-native"
import {AZULES} from "../../../constants/colors"

export const styles = StyleSheet.create(
    {
    modal:{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    
    dif:{
        backgroundColor: 'rgba(0,0,0,0.3)'
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
    txt:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400'
    },
    title:{
        flex: 1,
        padding: 5,
        fontFamily: 'sansbold',
        fontSize: 25
    },
    botones:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopColor: 'gray',
        borderTopWidth: 0.5,
        textAlign: 'center'
    },

})


