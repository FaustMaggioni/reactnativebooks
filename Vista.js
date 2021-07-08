import React, {useState,Component, useContext } from 'react';
import {SafeAreaView,View, Switch} from 'react-native';
import {styles} from './styles.js'
import MiLista from './screens/MiLista/MiLista'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import {ThemeContext} from './themes/theme-context'
import AppNavigator from './navigation/Navigator';

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
        <AppNavigator/>
        <Footer/>
        </SafeAreaView>
    )
}

export default Vista
