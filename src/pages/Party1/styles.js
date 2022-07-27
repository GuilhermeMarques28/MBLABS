import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

export const Container = styled.View`
flex: 1;
background-color: #000000;
`
export const ImageBackground = styled.ImageBackground`
width: 100%;
height: 350px;
opacity: 0.9;
`;

export const ViewBack = styled.View`
background-color: #000000;
opacity: 0.6;
height: 36px;
width: 56px;
align-items: center;
justify-content: center;
margin-left: 30px;
margin-top: 6px;
border-radius: 15px;
`
export const BackButton = styled.TouchableOpacity`

`;

export const ViewText = styled.View`
margin-top: 150px;
padding: 5px;
margin-left: 30px;
`;

export const Text1 = styled.Text`
color: #ffffff;
opacity: 0.5;
font-size: 16px;
font-family: 'Product Sans Regular';
`

export const Text2 = styled.Text`
color: #FFFFFF;
font-size: 26px;
font-family: 'Product Sans Bold';
`

export const Text3 = styled.Text`
color: #ffffff;
opacity: 0.5;
font-size: 16px;
font-family: 'Product Sans Regular';
`;

export const ViewDate = styled(LinearGradient)`
height: 60px;
width: 60px;
border-radius: 10px;
align-items: center;
justify-content: center;
margin-left: 270px;
`;

export const TitleDate = styled.Text`
font-size: 12px;
font-family: 'Product Sans Regular';
color: #FFFFFF;
`

export const TitleNumberDate = styled.Text`
font-size: 24px;
font-family: 'Product Sans Bold';
color: #FFFFFF;
`;