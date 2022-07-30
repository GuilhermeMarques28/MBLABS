import React, {useState} from 'react';
import {Modal} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  Container,
  ContentModal,
  AreaButton,
  ContentButton,
  ButtonText,
  CardView,
  CardButton,
  CardText,
  CardText2,
  Input,
  AreaInput,
} from './styles';

export default function ModalBuy() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <ContentModal>
          <AreaInput>
            <Input placeholder="Informe seu nome"/>
            <Input placeholder="Informe seu idade"/>
          </AreaInput>

          <AreaButton colors={['#439DFEE8', '#F687FFE8']}>
            <ContentButton onPress={() => setModalVisible(!modalVisible)}>
              <ButtonText>Comprar ingresso!</ButtonText>
            </ContentButton>
          </AreaButton>
        </ContentModal>
      </Modal>

      <CardView colors={['#439DFEE8', '#F687FFE8']}>
        <Entypo
          name="ticket"
          color="#FFF"
          size={35}
          style={{paddingRight: 10}}
        />
        <CardButton activeOpacity={0.7} onPress={() => setModalVisible(true)}>
          <CardText>Comprar o seu ingresso!</CardText>
        </CardButton>
      </CardView>
    </Container>
  );
}
