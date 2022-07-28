import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import {
  Container,
  Input,
  InputArea,
  CardView,
  CardButton,
  CardText,
  Title,
  CardText2,
  TitleHeader
} from './styles';
import ListParty from '../../components/ListParty';

import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native';
import ListParty2 from '../../components/ListParty2';


export default function Home() {
  return (
    <Container>
      <ScrollView>

      <Header />

      <InputArea colors={['#439DFEE8', '#F687FFE8']}>
        <TitleHeader>Event Lab</TitleHeader>
      </InputArea>

   
      <ListParty />

      <Title>Para você</Title>
 
      <CardView colors={['#439DFEE8', '#F687FFE8']}>
        <Entypo name="ticket" color="#FFF" size={35} style={{paddingRight: 10}} />
        <CardButton activeOpacity={0.7}>
          <CardText>Ganhe um ingresso gratuito!</CardText>
          <CardText2>Compartilhe e ganhe um ingresso.</CardText2>
        </CardButton>
      </CardView>

      <ListParty2/>

      </ScrollView>

    </Container>
  );
}
