import React from 'react';
import {ScrollView, Text} from 'react-native';
import {
  Container,
  Title,
  BannerButton,
  Banner,
  ImageBackground,
  ViewDate,
  TitleDate,
  TitleNumberDate,
  ViewShowName,
  TextShowName,
  ButtonText,
} from './styles';

function handleclick() {
  alert('Clicou');
}

export default function ListParty() {
  return (
    <Container>
      <Title>DESTAQUES</Title>

      <ScrollView horizontal>
        <ImageBackground
          source={require('../../assets/images/Party1.jpg')}
          resizeMode="cover">
          <ViewDate>
            <TitleDate>DEZ</TitleDate>
            <TitleNumberDate>21</TitleNumberDate>
          </ViewDate>

          <ViewShowName onPress={() => alert('Clicou')}>
            <TextShowName>Maroon 5</TextShowName>
          </ViewShowName>
        </ImageBackground>

        <ImageBackground
          source={require('../../assets/images/Party2.jpeg')}
          resizeMode="cover">
          <ViewDate>
            <TitleDate>DEZ</TitleDate>
            <TitleNumberDate>21</TitleNumberDate>
          </ViewDate>

          <ViewShowName>
            <TextShowName>The Weekend</TextShowName>
          </ViewShowName>
        </ImageBackground>
      </ScrollView>
    </Container>
  );
}
