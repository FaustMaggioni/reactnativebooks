import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import AppNavigator from './Navigator'
import AuthNavigator from './AuthNavigator'

export default () =>{
    const [user,setUser] = useState(null)

    return(
        <NavigationContainer>
            {user ? (
                <AppNavigator/>
            ) : (
                <AuthNavigator/>
            )}
        </NavigationContainer>
    )
}