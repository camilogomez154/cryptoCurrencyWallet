import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";

import { DashboardView } from './dashboard';

const Tab = createBottomTabNavigator()

export const HomeView = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen
                component={DashboardView}
                name="Dashboard"
                options={{
                    tabBarLabel: "Dashboard",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                component={DashboardView}
                name="Coins"
                options={{
                    tabBarLabel: "Balance",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="coins" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                component={DashboardView}
                name="Account"
                options={{
                    tabBarLabel: "Account",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
