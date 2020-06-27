import 'react-native-gesture-handler';

import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import { NavigationContainer } from '@react-navigation/native';

import { store, persistor } from './store';
import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <>
            <StatusBar barStyle="light-content" backgroundColor="#0094CD" />
            <Routes />
          </>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
// No estilo do StatusBar, local onde fica hora, sinal de wi-fi, bateria e outros, posso usar dark ou light-content.
