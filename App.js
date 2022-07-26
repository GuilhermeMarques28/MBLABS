import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function ChatRoom() {
 return (
   <NavigationContainer>
    <StatusBar backgroundColor="#000000"/> 
    <Routes/>
   </NavigationContainer>
  );
}