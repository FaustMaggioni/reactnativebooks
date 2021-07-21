import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigator from './Navigator'
import AuthNavigator from './AuthNavigator'
import { useSelector } from 'react-redux';

export default () =>{
    const loggedIn = useSelector(state => state.auth.token) 

    return(
        <NavigationContainer>
            {loggedIn ? <AppNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    )
}