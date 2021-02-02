import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import Detail from './src/pages/Detail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// const tab = StackNavigator({
//   First: { screen: FirstScreen },
//   Second: { screen: SecondScreen, navigationOptions: { tabBar: { visible: false } } },
//   Third: { screen: ThirdScreen },
// }, { mode: "card" });

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{
        // tabBarLabel: 'Home',
        tabBarVisible: false
      }}
        name="Home"
        component={Home} />
      <Tab.Screen
       options={{
        // tabBarLabel: 'Detail',
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
