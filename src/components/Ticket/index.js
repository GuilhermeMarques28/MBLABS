import React from 'react';
import {Container, Title, CardView, CardText, TextCard} from './styles';
import Entypo from 'react-native-vector-icons/Entypo'
import { Text } from 'react-native';

export default function Ticket() {
  return (
    <Container>
      <Title>Venha conhecer essa festa!</Title>

      <CardView colors={['#439DFEE8', '#F687FFE8']}>
        <CardText activeOpacity={0.8}>
        <Entypo name='ticket' color="#FFF" size={40} style={{paddingRight: 15}}/>
          <TextCard>Compre seu ingresso!</TextCard>
        </CardText>
      </CardView>
    </Container>
  );
}
