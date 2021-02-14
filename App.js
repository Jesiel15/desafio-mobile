import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import Detail from './src/pages/Detail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{
        tabBarVisible: false
      }}
        name="Home"
        component={Home} />
      <Tab.Screen
       options={{
        tabBarVisible: false
      }}
        name="Detail"
        component={Detail} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <MyTabs />
    </NavigationContainer >
  )
}
