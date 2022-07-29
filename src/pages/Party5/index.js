import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import About from '../../components/About';
import Ticket from '../../components/Ticket';

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

export default function Party5() {

  const navigation = useNavigation()

  return (
    <Container>
      <ImageBackground
        source={require('../../assets/images/Party5.jpg')}
        resizeMode="cover">
        <ViewBack>
          <BackButton onPress={() => navigation.navigate('Home')}>
            <Ionicons name="arrow-back" size={30} color="#fff" />
          </BackButton>
        </ViewBack>

        <ViewText>
          <Text1>Show</Text1>
          <Text2>Wedding</Text2>
          <Text3>Começa as 09:30</Text3>
        <ViewDate colors={['#439DFEE8', '#F687FFE8']}>
          <TitleDate>DEZ</TitleDate>
          <TitleNumberDate>23</TitleNumberDate>
        </ViewDate>
        </ViewText>
      </ImageBackground>

      <About/>

      <Ticket/>

    </Container>
  );
}
