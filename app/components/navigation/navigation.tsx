import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { SettingsView } from '../../views/settings';
import { HomeView } from '../../views/home';

const Stack = createStackNavigator();

export const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='home'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                component={HomeView}
                name="home"
            />
            <Stack.Screen
                component={SettingsView}
                name="settings"
            />
        </Stack.Navigator>
    </NavigationContainer>
);
