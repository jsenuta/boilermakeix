/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * References:
 *  https://medium.com/wesionary-team/react-navigation-stack-tab-and-drawer-navigation-in-same-react-native-application-16d03441021
 * https://reactnavigation.org/docs/navigation-container/
 * https://reactnavigation.org/docs/tab-based-navigation/
 */
 import React from 'react';
 import {
   StyleSheet,
 } from 'react-native';
 import {createStackNavigator} from '@react-navigation/stack'
 import {NavigationContainer} from '@react-navigation/native';
 import LoginScreen from './screens/Login';
 import RegisterScreen from './screens/Register';
 import ChatScreen from './screens/Chat';
 import HomeScreen from './screens/Home';
 import ProfileScreen from './screens/Profile';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 const Stack = createStackNavigator();
 const Tab = createBottomTabNavigator();
 
 const App = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator >
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Register" component={RegisterScreen} />
         <Stack.Screen name="Home" component={HomeScreen} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 };

 



//  const HomeScreen = ({ navigation }) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() =>
//         navigation.navigate('Profile', { name: 'Jane' })
//       }
//     />
//   );
// };
// const ProfileScreen = ({ navigation, route }) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

 const styles = StyleSheet.create({
 })
 export default App;