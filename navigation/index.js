import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthNavigator from './auth/AuthNavigator'
import { useSelector } from 'react-redux';
import TabNavigator from './tab';

export default () =>{
    const loggedIn = useSelector(state => state.auth.token) 

    return(
        <NavigationContainer>
            {loggedIn ? <TabNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    )
}