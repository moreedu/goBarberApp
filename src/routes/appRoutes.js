/* eslint-disable react/prop-types */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Profile';

const AppTab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <AppTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = 'event';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: { backgroundColor: '#00008B' },
        activeTintColor: '#FFF',
        inactiveTintColor: 'rgba(255, 255, 255, 0.4)',
      }}
    >
      <AppTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: '- Agendamentos -' }}
      />
      <AppTab.Screen
        name="Profile"
        component={Profile}
        options={{ title: '- Perfil -' }}
      />
    </AppTab.Navigator>
  );
}
