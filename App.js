
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from './src/screens/List';
import Description from './src/screens/Description';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='List'>
        <Stack.Screen name='List' component={List}/>
        <Stack.Screen name='Description' component={Description}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

