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
  AreaBackButton,
  BackButton,
  ButtonBackText
} from './styles';

export default function ModalShare() {
  const [modalVisible, setModalVisible] = useState(false);
  const [age, setAge] = useState('')
  const [name, setName] = useState('')
  
  function validationAge() {
    if(age < '18' || name === '') {
        return
    }
    else{
        setModalVisible(!modalVisible)
        setAge('')
        setName('')
    }
  }

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
            <Input 
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Informe seu nome"/>
            <Input 
            value={age}
            onChangeText={(text) => setAge(text)}
            placeholder="Informe sua idade"/>
          </AreaInput>

          <AreaButton colors={['#439DFEE8', '#F687FFE8']}>
            <ContentButton onPress={validationAge}>
              <ButtonText>Compartilhe e ganhe 1 ingresso!</ButtonText>
            </ContentButton>
          </AreaButton>

          <AreaBackButton>
          <BackButton onPress={() => setModalVisible(!modalVisible)}> 
           <ButtonBackText>Sair</ButtonBackText>
          </BackButton>
          </AreaBackButton>

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
          <CardText>Ganhe um ingresso gratuito!</CardText>
          <CardText2>Compartilhe e ganhe um ingresso.</CardText2>
        </CardButton>
      </CardView>
    </Container>
  );
}
