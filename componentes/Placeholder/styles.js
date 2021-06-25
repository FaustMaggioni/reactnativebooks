import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors'

export const styles = StyleSheet.create({
    card:{
        paddingVertical: 'auto',
        alignSelf: 'center',
        borderRadius: 10,
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
    },
    stretch:{
        width: 200,
        height: 200,
        alignSelf: 'center',
        resizeMode: "cover"
    }
}
)