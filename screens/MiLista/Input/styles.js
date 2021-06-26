import {StyleSheet} from 'react-native';
import {COLORS, AZULES} from '../../../constants/colors'

export const styles = StyleSheet.create({
    input:{
        width: '100%',
        backgroundColor: AZULES.accent,
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center'
    },
    container: {
        flex: 1
    },
    touchable:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtInput:{
        fontSize: 20,
        padding: 10,
        color: 'white',
        fontFamily: 'sanslight'
    }
})

