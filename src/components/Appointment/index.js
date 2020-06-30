import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons';

import { Container, Left, Avatar, Info, Name, Time } from 'styled-components';

export default function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{ uri: 'https://api.adorable.io/avatar/50/rocketseat.png' }}
        />

        <Info>
          <Name>Eduardo Braz</Name>
          <Time>em 02 horas</Time>
        </Info>
      </Left>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#00ff" />
      </TouchableOpacity>
    </Container>
  );
}
