import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomePage from '../screens/HomePage';
import Schedule from '../screens/Schedule';
import Done from '../screens/Done';
import TaskStack from './TaskStack';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    // <Tab.Navigator
    //   tabBarOptions={{
    //     showLabel: false,
    //     style: {
    //       position: 'absolute',

    //       bottom: 25,
    //       left: 20,
    //       right: 20,
    //       elevation: 0,
    //       backgroundColor: '#406882 ',
    //       borderRadius: 15,
    //       height: 90,
    //       ...styles.shadow
    //     },
    //   }}>
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={({route}) => ({
        headerStyle: {
          backgroundColor: '#406882',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: '#fff',
        },
        headerLeftContainerStyle: {
          paddingLeft: 10,
          tabBarActiveTintColor: '#e91e63',
        },
        tabBarStyle: {
          backgroundColor: '#406882',
          shadow: {
            shadowColor: '#7F5D50',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5,
          },
        },
        tabBarIcon: ({focused, color, size,}) => {
          if (route.name == 'Home') {
            return (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            );
          } else if (route.name === 'Todays Schedule') {
            return (
              <MaterialIcons name="schedule" color={color} size={size} />
              
            );
          } else if (route.name === 'Done') {
            return <Ionicons
                name="md-checkmark-done-sharp"
                color={color}
                size={size}
              />;
          }
        },
        tabBarActiveTintColor: '#1A374D',
        tabBarInactiveTintColor: '#B1D0E0',
      })}>
      <Tab.Screen
        name="Home"
        component={TaskStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
         
        }}
      />
      <Tab.Screen
        name="Todays Schedule"
        component={Schedule}
        options={{
          tabBarLabel: 'Schedule',
          
        }}
      />
      <Tab.Screen
        name="Done"
        component={Done}
        options={{
          tabBarLabel: 'Done',
         
        }}
         
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5D50',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
