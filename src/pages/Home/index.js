import React, { useState} from 'react';

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
import Modal from '../../components/Modal';
import Entypo from 'react-native-vector-icons/Entypo';
import {ScrollView,} from 'react-native';
import ListParty2 from '../../components/ListParty2';
import TelaIngresso from '../../components/Modal';

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

      <TelaIngresso/>

      <ListParty2/>

      </ScrollView>

    </Container>
  );
}
