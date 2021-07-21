import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import MiLista from '../screens/MiLista/MiLista'
import Articulo from '../screens/ArticuloScreen/Articulo'
import { useSelector } from 'react-redux';

const Stack = createStackNavigator()

const AppNavigator = () => {
    const {title}= useSelector(state => state.screen.selected)
    return (
        <Stack.Navigator initialRouteName='Mi Lista'>
            <Stack.Screen name='Mi Lista' component={MiLista}/>
            <Stack.Screen name='Articulo'  options={() => ({title:title})}component={Articulo}/>
        </Stack.Navigator>
)}

export default AppNavigator