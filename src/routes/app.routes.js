import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../pages/Home';
import Details from '../pages/Details';
import Entypo from 'react-native-vector-icons/Entypo'
import Favorites from '../pages/Favorites';


const TabStack = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <TabStack.Navigator screenOptions={{
      tabBarStyle:{
        backgroundColor: '#000000',
        borderTopColor: 'transparent',
        paddingBottom: 3,
        paddingTop: 3,
      },
      tabBarLabelStyle:{
        fontFamily: 'Product Sans Regular',
      },
      tabBarActiveTintColor: '#FFF',
      
    }}>
      <TabStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <Entypo name='home' color={color} size={size}/>
          ),
          headerShown: false
        }}
      />
      <TabStack.Screen
        name="Details"
        component={Details}
        options={{
          tabBarIcon: ({size, color}) => (
            <Entypo name='calendar' color={color} size={size}/>
          ),
          headerShown: false
        }}
      />
      <TabStack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({size, color}) => (
            <Entypo name='star' color={color} size={size}/>
          ),
          headerShown: false
        }}
      />
    </TabStack.Navigator>
  );
}
