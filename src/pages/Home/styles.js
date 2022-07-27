import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

export const Container = styled.View`
flex: 1;
background-color: #000000;

`

export const InputArea = styled.View`
flex-direction: row;
width: 90%;
background-color: #1D1D1D;
height: 50px;
border-radius: 15px;
margin: 30px 20px;
align-items: center;
padding-left: 9px;
`;

export const Input = styled.TextInput.attrs({
    placeholder: 'Procurar',
    placeholderTextColor: '#666666'
})`
align-items: center;
width: 80%;
height: 50px;
color: #FFF;
padding-left: 5px;
font-size: 15px;
font-family: 'Product Sans Bold';
`;

export const Title = styled.Text`
font-size: 20px;
font-family: 'Product Sans Bold';
color: #fff;
margin-left: 37px;

`;

export const CardView = styled(LinearGradient)`
height: 100px;
width: 85%;
margin-top: 10px;
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


