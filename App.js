
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from './src/screens/List';
import Description from './src/screens/Description';
import { configureHeader } from './src/utils';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='List'>
        <Stack.Screen 
          name='List' 
          component={List}
          options = {{
            title : "Movies",
            headerStyle : {
              backgroundColor: '#5C5470',
            },
          }}
          />
        <Stack.Screen 
          name='Description' 
          component={Description}
          options = { ({ route }) => 
            ({ 
              title: route.params.movie.title ,
              headerStyle : {
                backgroundColor: '#5C5470',
              },
            })
          }
          />
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

