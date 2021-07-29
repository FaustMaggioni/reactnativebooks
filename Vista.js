import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import { styles} from './styles.js'
import { ThemeContext } from './themes/theme-context'
import Navigator from './navigation';

const Vista = () => {
    const { dark, theme, toggle } = useContext(ThemeContext);
   
    return (
        <SafeAreaView style={[styles.container, {backgroundColor: theme.backgroundColor }]} >
          <Navigator/>
        </SafeAreaView>
    )
}

export default Vista
