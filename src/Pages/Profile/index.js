/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
// , { useRef, useState }
import Background from '../../components/Background';
import { signOut } from '../../store/modules/auth/actions';

import { Container, LogoutButton } from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  // const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <LogoutButton onPress={handleSubmit}>Sair</LogoutButton>
      </Container>
    </Background>
  );
}
