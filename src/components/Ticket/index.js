import React from 'react';
import {Container, Title, CardView, CardText, TextCard} from './styles';
import Entypo from 'react-native-vector-icons/Entypo'
import { Text } from 'react-native';
import ModalBuy from '../ModalBuy';

export default function Ticket() {
  return (
    <Container>
      <Title>Venha conhecer essa festa!</Title>

        <ModalBuy/>
    </Container>
  );
}
