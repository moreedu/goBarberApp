/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';

import SelectProvider from '../Pages/New/SelectProvider';
import SelectDateTime from '../Pages/New/SelectDateTime';
import Confirm from '../Pages/New/Confirm';

const NewStack = createStackNavigator();

export default function NewRoutes({ navigation }) {
  return (
    <NewStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerStyle: { backgroundColor: '#0094CD' },
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
      }}
      headerLayoutPreset="center"
    >
      <NewStack.Screen
        name="SelectProvider"
        component={SelectProvider}
        options={{
          title: 'Escolha o Profissional',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="chevron-left" size={30} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
      <NewStack.Screen
        name="SelectDateTime"
        component={SelectDateTime}
        options={{
          title: 'Selecione o horário',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SelectProvider');
              }}
            >
              <Icon name="chevron-left" size={30} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
      <NewStack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          title: 'Confirmar Agendamento',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SelectDateTime');
              }}
            >
              <Icon name="chevron-left" size={30} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
    </NewStack.Navigator>
  );
}
