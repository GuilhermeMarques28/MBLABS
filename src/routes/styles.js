import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";


export const Container = styled.View`
background-color: #000000;
flex: 1;
align-items: center;
justify-content: center;
padding-bottom: 5px;
`;

export const Title = styled.Text`
color: #FFFFFF;
font-size: 50px;
font-family: 'Product Sans Bold';
`;

export const LogoArea = styled(LinearGradient)`
width: 80%;;
height: 50px;
border-radius: 15px;
align-items: center;
padding-left: 9px;
justify-content: center;
margin-bottom: 10px;
`;

export const TitleLogo = styled.Text`
font-size: 24px;
font-family: 'Product Sans Bold';
color: #FFFFFF;
`;