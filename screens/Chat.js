import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native'
import { Input, Button } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
    SafeAreaView,
    Text, Alert
 } from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { createStackNavigator} from '@react-navigation/stack';
 import { Ionicons } from '@expo/vector-icons';

 const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Chat = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Welcome' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
};

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}



// function Chat() {
//   return (
//     <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused, color, size }) => {
//      let iconName;
//      if (route.name === 'TabA') {
//         iconName = focused
//         ? 'ios-information-circle'
//         : 'ios-information-circle-outline';
//       } else if (route.name === 'TabB') {
//         iconName = focused
//         ? 'ios-list-box'
//         : 'ios-list';
//       }
// return <Ionicons name={iconName} size={size} color={color}     />;
//         },
//       })}
//       tabBarOptions={{
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//       }}
//     >
//         <Tab.Screen name="TabA" component={TabAScreen} />
//         <Tab.Screen name="TabB" component={TabBScreen} />
//     </Tab.Navigator>
//   );
// }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        marginTop: 100,
    },
    button: {
        width: 370,
        marginTop: 10
    }
})
export default Chat;