// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomePage from '../screens/HomePage';
// import NewTask from '../screens/NewTask';
// import TaskDetails from '../screens/TaskDetails';

// const Stack = createNativeStackNavigator();
// const TaskStack = () => {
//   return (
//     <NavigationContainer independent={true}>
//       <Stack.Navigator
//         initialRouteName="HomePage"
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#406882',
//           },
//           headerTitleStyle: {
//             fontWeight: 'bold',
//             fontSize: 25,
//             color: '#fff',
//           },
//           headerLeftContainerStyle: {
//             paddingLeft: 10,
//             tabBarActiveTintColor: '#e91e63',
//           },
//           tabBarStyle: {
//             backgroundColor: '#406882',
//             shadow: {
//               shadowColor: '#7F5D50',
//               shadowOffset: {
//                 width: 0,
//                 height: 10,
//               },
//               shadowOpacity: 0.25,
//               shadowRadius: 3.5,
//               elevation: 5,
//             },
//           },
//         }}>
//         <Stack.Screen
//           name="HomePage"
//           component={HomePage}
//           options={{
//             headerShown: false,
//           }}
//         />
//         <Stack.Screen
//           name="NewTask"
//           component={NewTask}
//           options={{
//             headerShown: false,
//             title: 'Add Task',
//           }}
//         />
//          <Stack.Screen
//           name="TaskDetails"
//           component={TaskDetails}
//           options={{
//             title: 'Details',
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default TaskStack;

// const styles = StyleSheet.create({});
