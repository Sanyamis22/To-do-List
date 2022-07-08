import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './AppStack';
import AppStack from './AppStack';
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
import AboutUs from '../screens/AboutUs';
const Stack = createNativeStackNavigator();

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login1"
        screenOptions={{headerTitleAlign: 'center'}}>
        {user ? (
          <>
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Tabs"
              component={Tabs}
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
              name="AboutUs"
              component={AboutUs}
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
          </>
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
      {/* { user ? <AppStack/> : <AuthStack/>} */}
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
