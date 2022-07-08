import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage';
import Login from '../screens/auth/Login';
import Registration from '../screens/auth/Registration';
import ForgotPassword from '../screens/auth/ForgotPassword';
import Tabs from './Tabs';
import Dashboard from '../screens/Dashboard';
import NewTask from '../screens/NewTask';
import Schedule from '../screens/Schedule';
import Done from '../screens/Done';
import TaskDetails from '../screens/TaskDetails';
import Profile from '../screens/Profile';
import Notify from '../screens/Notify';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AuthStack

const styles = StyleSheet.create({})