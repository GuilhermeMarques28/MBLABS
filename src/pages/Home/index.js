import React from 'react';

import Header from '../../components/Header';
import {
  Container,
  InputArea,
  Title,
  TitleHeader
} from './styles';
import ListParty from '../../components/ListParty';
import {ScrollView,} from 'react-native';
import ListParty2 from '../../components/ListParty2';
import ModalShare from '../../components/ModalShare';

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

      <ModalShare/>

      <ListParty2/>

      </ScrollView>

    </Container>
  );
}
