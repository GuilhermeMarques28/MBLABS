import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { Platform } from "react-native";

export const Container = styled.View`
flex: 1;
margin-top: 10px;
background-color: #000000;
`;

export const ContentModal = styled.KeyboardAvoidingView.attrs({
    behavior: Platform.OS === 'android' ? 'padding' : 'height'
})`
justify-content: center;
align-items: center;
background-color: #000000;
height: 350px;
margin-top: 450px;
border-radius: 10px;
margin-bottom: 20px;
`;

export const TextModal = styled.Text`
color: #FFFFFF;
`;

export const CardView = styled(LinearGradient)`
height: 90px;
width: 85%;
margin-top: 10px;
margin-bottom: 10px;
margin-left: 35px;
border-radius: 10px;
flex-direction: row;
align-items: center;
justify-content: center;
padding-right: 10px;
`;

export const CardButton = styled.TouchableOpacity`
align-items: center;
justify-content: center;
`;

export const CardText = styled.Text`
color: #FFF;
font-size: 18px;
font-family: 'Product Sans Bold';

padding-top: 5px;
`;

export const CardText2 = styled.Text`
color: #FFF;
font-size: 15px;
font-family: 'Product Sans Regular';
padding-top: 5px;
`;

export const AreaInput = styled.View`
background-color: black;
width: 90%;
height: 140px;
align-items: center;
justify-content: center;
margin-top: 20px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#DDD'
})`
width: 90%;
background: #2a2a29;
color: #fff;
margin-top: 15px;
border-radius: 7px;
font-size: 17px;
font-family: 'Product Sans Regular';
padding: 10px;
`;

export const AreaButton = styled(LinearGradient)`
width: 80%;
margin-bottom: 120px;
margin-top: 10px;
align-items: center;
justify-content: center;
height: 40px;
border-radius: 10px;

`;

export const ContentButton = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
color: #FFF;
font-size: 17px;
font-family: 'Product Sans Bold';
`;
