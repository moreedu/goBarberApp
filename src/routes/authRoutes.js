import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#0094CD' },
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
      }}
      headerLayoutPreset="center"
      headerBackTitleVisible={false}
    >
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: '- GoBarber -' }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: 'Criar nova Conta' }}
      />
    </AuthStack.Navigator>
  );
}
