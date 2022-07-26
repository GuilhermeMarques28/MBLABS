import React from 'react';
import { Text, View } from 'react-native';
import Header from '../../components/Header';
import { Container, Input,InputArea } from './styles';
import Icon from 'react-native-vector-icons/Feather'
import ListParty from '../../components/ListParty';



export default function Home() {
 return (
   <Container>
    <Header/>
    
    <InputArea>
     <Icon name='search' size={24} color="#666666" />    
     <Input/>
    </InputArea>
    
    <ListParty/>
   </Container>
  );
 }