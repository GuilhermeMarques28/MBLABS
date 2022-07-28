import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {ScrollView, Text} from 'react-native';
import {
  Container,
  Title,
  ImageBackground,
  ViewDate,
  TitleDate,
  TitleNumberDate,
  ViewShowName,
  TextShowName,
} from './styles';



export default function ListParty() {

  const navigation = useNavigation()

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

          <ViewShowName onPress={() => navigation.navigate('Party1')}>
            <TextShowName>Maroon 5</TextShowName>
          </ViewShowName>
        </ImageBackground>

        <ImageBackground
          source={require('../../assets/images/Party2.jpeg')}
          resizeMode="cover">
          <ViewDate>
            <TitleDate>DEZ</TitleDate>
            <TitleNumberDate>23</TitleNumberDate>
          </ViewDate>

          <ViewShowName onPress={() => navigation.navigate('Party2')}>
            <TextShowName>The Weekend</TextShowName>
          </ViewShowName>
        </ImageBackground>

        <ImageBackground
          source={require('../../assets/images/Party3.jpg')}
          resizeMode="cover">
          <ViewDate>
            <TitleDate>DEZ</TitleDate>
            <TitleNumberDate>25</TitleNumberDate>
          </ViewDate>

          <ViewShowName>
            <TextShowName>One Direction</TextShowName>
          </ViewShowName>
        </ImageBackground>
      </ScrollView>
    </Container>
  );
}
