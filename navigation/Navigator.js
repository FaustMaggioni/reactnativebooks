import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import MiLista from '../screens/MiLista/MiLista'
import Articulo from '../screens/ArticuloScreen/Articulo'
const Stack = createStackNavigator()
//contiene navigator y screen

const AppNavigator = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Mi Lista'>
            <Stack.Screen name='Mi Lista' component={MiLista}/>
            <Stack.Screen name='Articulo' options={({route}) => ({title: route.params.title})} component={Articulo}/>
        </Stack.Navigator>
    </NavigationContainer>
)}

export default AppNavigator