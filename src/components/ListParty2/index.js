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



export default function ListParty2() {

  const navigation = useNavigation()

  return (
    <Container>
      <Title>Eventos para empresas</Title>

      <ScrollView horizontal>
        <ImageBackground
          source={require('../../assets/images/Party4.jpg')}
          resizeMode="cover">
          <ViewDate>
            <TitleDate>DEZ</TitleDate>
            <TitleNumberDate>21</TitleNumberDate>
          </ViewDate>

          <ViewShowName onPress={() => navigation.navigate('Party4')}>
            <TextShowName>Sprigfield</TextShowName>
          </ViewShowName>
        </ImageBackground>

        <ImageBackground
          source={require('../../assets/images/Party5.jpg')}
          resizeMode="cover">
          <ViewDate>
            <TitleDate>DEZ</TitleDate>
            <TitleNumberDate>23</TitleNumberDate>
          </ViewDate>

          <ViewShowName onPress={() => navigation.navigate('Party5')}>
            <TextShowName>Wedding</TextShowName>
          </ViewShowName>
        </ImageBackground>

        <ImageBackground
          source={require('../../assets/images/Party6.jpg')}
          resizeMode="cover">
          <ViewDate>
            <TitleDate>DEZ</TitleDate>
            <TitleNumberDate>25</TitleNumberDate>
          </ViewDate>

          <ViewShowName onPress={() => navigation.navigate('Party6')}>
            <TextShowName>Rave</TextShowName>
          </ViewShowName>
        </ImageBackground>
      </ScrollView>
    </Container>
  );
}
