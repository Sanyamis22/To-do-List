import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage';


const Stack = createNativeStackNavigator();
const navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />

      {/* <Stack.Screen name="Login1" component={Login1} />
      <Stack.Screen name="Profile" component={Profile} /> */}
    </Stack.Navigator>
  </NavigationContainer>
    
  )
}

export default navigation

