import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";


export const Container = styled.View`
margin-top: 20px;
`;

export const Title = styled.Text`
color: #fff;
font-size: 20px;
font-family: 'Product Sans Bold';
margin-left: 35px;
`;

export const CardView = styled(LinearGradient)`
height: 80px;
width: 85%;
margin-top: 20px;
margin-left: 35px;
border-radius: 10px;
align-items: center;
flex-direction: row;
justify-content: center;
`;

export const CardText = styled.TouchableOpacity`
justify-content: center;
align-items: center;
flex-direction: row;
`;

export const TextCard = styled.Text`
color: #FFFFFF;
font-size: 20px;
font-family: 'Product Sans Bold';
`