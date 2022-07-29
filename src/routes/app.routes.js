import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Party1 from '../pages/Party1';
import Party2 from '../pages/Party2';
import Party3 from '../pages/Party3';
import Party4 from '../pages/Party4';
import Party5 from '../pages/Party5';
import Party6 from '../pages/Party6';


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
      <AppStack.Screen
        name="Party2"
        component={Party2}
        options={{
          headerShown: false
        }}
       />
       <AppStack.Screen
        name="Party3"
        component={Party3}
        options={{
          headerShown: false
        }}
       />
       <AppStack.Screen
        name="Party4"
        component={Party4}
        options={{
          headerShown: false
        }}
       />
       <AppStack.Screen
        name="Party5"
        component={Party5}
        options={{
          headerShown: false
        }}
       />
       <AppStack.Screen
        name="Party6"
        component={Party6}
        options={{
          headerShown: false
        }}
       />
    </AppStack.Navigator>
    
    
  );
}
