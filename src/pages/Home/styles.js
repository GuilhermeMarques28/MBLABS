import styled from "styled-components/native";


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
