import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import About from '../../components/About';

import {
  Container,
  ImageBackground,
  ViewBack,
  BackButton,
  ViewText,
  Text1,
  Text2,
  Text3,
  ViewDate,
  TitleDate,
  TitleNumberDate
} from './styles';

export default function Party1() {
  return (
    <Container>
      <ImageBackground
        source={require('../../assets/images/Party1.jpg')}
        resizeMode="cover">
        <ViewBack>
          <BackButton>
            <Ionicons name="arrow-back" size={30} color="#fff" />
          </BackButton>
        </ViewBack>

        <ViewText>
          <Text1>Show</Text1>
          <Text2>The Weekend</Text2>
          <Text3>Começa as 09:30</Text3>
        <ViewDate colors={['#439DFEE8', '#F687FFE8']}>
          <TitleDate>DEZ</TitleDate>
          <TitleNumberDate>21</TitleNumberDate>
        </ViewDate>
        </ViewText>
      </ImageBackground>

      <About/>    

    </Container>
  );
}
