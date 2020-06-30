import React from 'react';
import { useDispatch } from 'react-redux';
import { Text } from 'react-native';

import Background from '../../components/Background';
import { signOut } from '../../store/modules/auth/actions';

import { Container, LogoutButton } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Text>Agendamentos - Dashboard</Text>
        <LogoutButton onPress={handleLogout}>Sair</LogoutButton>
      </Container>
    </Background>
  );
}
