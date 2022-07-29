import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

export const Container = styled.View`
flex: 1;
margin-top: 10px;
background-color: #000000;
`;

export const ContentModal = styled.View`
justify-content: center;
align-items: center;
background-color: #000000;
height: 350px;
margin-top: 450px;
border-radius: 10px;
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
