import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import DetailsParty1 from '../pages/DetailsParty1'
import Favorites from '../pages/Favorites';

import Entypo from 'react-native-vector-icons/Entypo'

const AppStack = createNativeStackNavigator();

export default function AppRoutes() {
  return (

    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <Entypo name='home' color={color} size={size}/>
          ),
          headerShown: false
        }}
      />
    </AppStack.Navigator>
    
    
  );
}
