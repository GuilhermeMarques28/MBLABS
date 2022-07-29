import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo'

import {Container, ContentModal,TextModal, CardView, CardButton, CardText, CardText2,} from './styles'

export default function TelaIngresso () {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Container>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
         setModalVisible(!modalVisible);
        }}
      >
        <ContentModal>
            <Button title="fechar" onPress={() => setModalVisible(!modalVisible)}/>
         <TextModal>INGRESSO COMPRADO!</TextModal>
        </ContentModal>
      </Modal>
      <CardView colors={['#439DFEE8', '#F687FFE8']}>
        <Entypo name="ticket" color="#FFF" size={35} style={{paddingRight: 10}} />
        <CardButton activeOpacity={0.7} onPress={() => setModalVisible(true)}>
          <CardText>Ganhe um ingresso gratuito!</CardText>
          <CardText2>Compartilhe e ganhe um ingresso.</CardText2>
        </CardButton>
      </CardView>
    </Container>
  );
};

