import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors'

export const styles = StyleSheet.create({
    card:{
        paddingVertical: 'auto',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.9)'
    },
    cardTitle:{
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'sanspro',
    },
    cardSubtitle:{
        fontSize: 20,
        color: 'black',
        fontFamily: 'sanslight',
        textAlign: 'center',
    },
    stretch:{
        width: 200,
        height: 200,
        alignSelf: 'center',
        resizeMode: "cover"
    }
}
)