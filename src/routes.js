import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
// import logo from './assets/images/logo.bmp';

// A estrutura empregada é a nova após a atualização do React-navigation. Ver pdf... módulo 06

const Stack = createStackNavigator();

export default function Routes(Signed = false) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#0094CD' },
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
      }}
      headerLayoutPreset="center"
      headerBackTitleVisible={false}
    >
      {Signed ? (
        <>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ title: '- Agendamentos -' }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ title: '- GoBarber -' }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: 'Criar nova Conta' }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
