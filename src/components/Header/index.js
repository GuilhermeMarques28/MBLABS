import React from 'react';
import { Image, View } from 'react-native';
import { Container, Date, Content, Title } from './styles';
import Entypo from 'react-native-vector-icons/Entypo'

export default function Header() {
 return (
   <Container>
    <Date>25 de Julho, 21:00</Date>
    <Content>
        <Title>Explore eventos</Title>
        <Entypo name='user' color="#FFF" size={20}/>
    </Content>
   </Container>
  );
}