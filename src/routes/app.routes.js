import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Party1 from '../pages/Party1';


const AppStack = createNativeStackNavigator();

export default function AppRoutes() {
  return (

    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <AppStack.Screen
        name="Party1"
        component={Party1}
        options={{
          headerShown: false
        }}
      />
    </AppStack.Navigator>
    
    
  );
}
