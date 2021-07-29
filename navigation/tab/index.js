import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

import { AZULES } from '../../constants/colors';
import { MI_LISTA } from '../../constants/screens';
import FormNavigator from '../form/FormNavigator'
import AppNavigator from '../list/Navigator';
import styles from './styles';

const TabStack = createBottomTabNavigator();

const HomeIcon = ({focused}) => (
    <View>
        <Ionicons color={ focused? AZULES.accent : AZULES.dark} name='md-home' size={30} style={styles.homeIcon} />
    </View>  
)

const FormIcon = ({focused}) => (
    <View>
        <Ionicons color={ focused? AZULES.accent : AZULES.dark}name='add-circle-sharp' size={30} style={styles.homeIcon} />
    </View>
)

const TabNavigator = () => {
    //agregar estilos
    return (
        <TabStack.Navigator initialRouteName={MI_LISTA} tabBarOptions={{ showLabel: false,}}>
            <TabStack.Screen 
                name={MI_LISTA} 
                component={AppNavigator} 
                options={{tabBarIcon: ({ focused }) => ( <HomeIcon focused={focused} /> ) }} 
            />
            <TabStack.Screen 
                name='Prueba'
                component={FormNavigator} 
                options={{tabBarIcon: ({ focused }) => ( <FormIcon focused={focused} /> ) }}  
            />
        </TabStack.Navigator>
    )
}

export default TabNavigator

