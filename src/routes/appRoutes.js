/* eslint-disable react/prop-types */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import SelectProvider from '../Pages/New/SelectProvider';
import NewRoutes from './newRoutes';

import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Profile';

const AppTab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <AppTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = 'event';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'NewRoutes') {
            iconName = 'add-circle-outline';
          }
          return <Icon name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        style: { backgroundColor: '#00008B' },
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255, 255, 255, 0.4)',
      }}
    >
      <AppTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: 'Agendamentos' }}
      />
      <AppTab.Screen
        name="NewRoutes"
        component={NewRoutes}
        options={{ title: 'Novo Agendamento', tabBarVisible: false }}
      />
      <AppTab.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Perfil' }}
      />
    </AppTab.Navigator>
  );
}
