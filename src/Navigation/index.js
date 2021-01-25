import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screen/Login/login'
import Home from '../Screen/Home/home'
import ListReeferContainer from '../Screen/ListReeferContainer/listreefercontainer'

const Stack = createStackNavigator();

const StackNavigator = React.memo((props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ListReeferContainer"
        component={ListReeferContainer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
});

export default StackNavigator;