import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import Detail from './src/pages/Detail';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Detail" component={Detail} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer >

  )
}

// export default function App() {
//   return (
//    <NavigationContainer>
//      <Stack.Navigator initialRouteName="Home">

//        <Stack.Screen name="Home" component={Home}/>


//        <Stack.Screen name="Detail" component={Detail}/>

//      </Stack.Navigator>
//    </NavigationContainer>

  // <Tab.Navigator>
  //     <Tab.Screen name="Home" component={Home} />
  //     <Tab.Screen name="Detail" component={Detail} />
  //   </Tab.Navigator>
//   )  
// }
