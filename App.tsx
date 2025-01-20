import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Details" component={DetailsScreen} options={{animation:'slide_from_bottom'}} />

      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
