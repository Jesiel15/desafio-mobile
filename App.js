import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import Detail from './src/pages/Detail';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}
