import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import FormArticulo from '../../screens/FormArticulo/FormArticulo';
import FormBody from '../../screens/FormArticulo/FormBody/FormBody';

const FormStack = createStackNavigator()

const FormNavigator = () => {
    return(
    <FormStack.Navigator initialRouteName='Form' screenOptions={{headerShown: true}}>
        <FormStack.Screen name='Form' options={{title:'Agregar'}} component={FormArticulo}/>
        <FormStack.Screen name='Body' options={{title:'Explayate'}} component={FormBody}/>
    </FormStack.Navigator>
)}

export default FormNavigator