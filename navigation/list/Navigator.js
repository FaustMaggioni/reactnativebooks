import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import MiLista from '../../screens/MiLista/MiLista'
import Articulo from '../../screens/ArticuloScreen/Articulo'
import { useSelector } from 'react-redux';

const Stack = createStackNavigator()

const AppNavigator = () => {
    const data = useSelector(state => state.screen.selected)
    console.log('DATA: ',data)
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={MiLista}/>
            <Stack.Screen name='Articulo'  options={() => ({title: data.title })} component={Articulo}/>
        </Stack.Navigator>
)}

export default AppNavigator