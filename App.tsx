import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashBoard from './src/Screens/DashBoard';


const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={DashBoard} name="DashBoard"/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
