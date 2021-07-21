import React, {useState,Component, useContext } from 'react';
import {SafeAreaView,View, Switch} from 'react-native';
import {styles} from './styles.js'
import Header from './componentes/Header/Header'
import {ThemeContext} from './themes/theme-context'
import Navigator from './navigation';

const Vista = () => {
    const { dark, theme, toggle } = useContext(ThemeContext);
   
    return (
        <SafeAreaView style={[styles.container, {backgroundColor: theme.backgroundColor }]} >
          {/*<Header/>
          <Switch
            trackColor={{ false: "#767577", true: "#ccc" }}
            thumbColor={dark ? "#fff" : "#f4f3f4"}
            onChange={toggle}
            value={dark}
          />
          */}
          <Navigator/>
        </SafeAreaView>
    )
}

export default Vista
