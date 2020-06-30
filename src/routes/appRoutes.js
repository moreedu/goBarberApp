import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../Pages/Dashboard';

const AppStack = createStackNavigator();

export default function AppRoutes() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#0094CD' },
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
      }}
      headerLayoutPreset="center"
      headerBackTitleVisible={false}
    >
      <AppStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: '- Agendamentos -' }}
      />
    </AppStack.Navigator>
  );
}
