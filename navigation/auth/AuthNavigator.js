import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import AuthScreen from '../../screens/User/AuthScreen';

const AuthStack = createStackNavigator()

const AuthNavigator = () => (
    <AuthStack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <AuthStack.Screen name='Login' component={AuthScreen}/>
    </AuthStack.Navigator>
)

export default AuthNavigator