import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors'

export const styles = StyleSheet.create({
    card:{
        paddingVertical: 'auto',
        alignSelf: 'center',
        borderRadius: 10,
    },
    cardtext:{
        fontSize: 30,
        fontWeight: '300',
        textAlign: 'center',
        color: COLORS.secondary
    },
    stretch:{
        width: 200,
        height: 200
    }
}
)