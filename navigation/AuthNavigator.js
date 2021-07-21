import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { useSelector } from 'react-redux';
import AuthScreen from '../screens/User/AuthScreen';

const AuthStack = createStackNavigator()

const AuthNavigator = () =>{
    <AuthStack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <AuthStack.Screen name='Login' component={AuthScreen}/>
    </AuthStack.Navigator>
}