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

const AppStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="NewTask"
          component={NewTask}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Schedule"
          component={Schedule}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Done"
          component={Done}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="TaskDetails"
          component={TaskDetails}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Notify"
          component={Notify}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
