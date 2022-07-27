import React from 'react';
import { View } from 'react-native';
import { Container, Title, ContentTitle, TitleAbout, ContentTitleAbout } from './styles';

export default function About() {
 return (
   <Container>
     <ContentTitle>
      <Title>Sobre</Title>
     </ContentTitle>

     <ContentTitleAbout>

     <TitleAbout>Lorem ipsum dolor sit amet, consectetur elit adipiscing elit. Venenatis pulvinar a amet in, suspendisse vitae, posuere eu tortor et. Und commodo, fermentum, mauris leo eget.</TitleAbout>       
     </ContentTitleAbout>
   </Container>
  );
}