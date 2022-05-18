import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {navigationRef} from './RootNavigation';
import AuthNavigation from './AuthNavigation';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

const NavigationMain = () => {
//   const {
//     authData: {isAuthenticated},
//   } = useSelector(state => state.auth);
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        {/* {!isAuthenticated ? ( */}
          <Stack.Screen
            name="AuthNavigation"
            component={AuthNavigation}
            headershow
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            headershow
            options={{
              headerShown: false,
            }}
          />
        {/* ) : ( */}
          {/* <Stack.Screen
            name="DrawerNavigation"
            component={DrawerNavigation}
            options={{headerShown: false}}
          /> */}
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationMain;

const styles = StyleSheet.create({});
