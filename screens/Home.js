import React, { useState, useEffect, useCallback, useLayoutEffect, Component } from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import { Input, Button, ListItem } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SafeAreaView,
    Text, Alert
 } from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { createStackNavigator} from '@react-navigation/stack';
 import { Ionicons } from '@expo/vector-icons';
 import { GiftedChat } from 'react-native-gifted-chat'

import { TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

import axios from "axios";
import { NavigationHelpersContext } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

//import Chat from './Chat';


 const Tab = createBottomTabNavigator();

//  export class Home extends Component<Props> {
  
// }
function Home() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
     let iconName;
     if (route.name === 'Chats') {
        iconName = focused
        ? 'ios-information-circle'
        : 'ios-information-circle-outline';
      } else if (route.name === 'Profile') {
        iconName = focused
        ? 'ios-list-box'
        : 'ios-list';
      }
return <Ionicons name={iconName} size={size} color={color}     />;
        },
      })}
      tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      }}
    >
        <Tab.Screen name="Chats" component={TabAScreen} options={{
            headerShown: false,
          }} />
        <Tab.Screen name="Profile" component={TabBScreen} options={{
            headerShown: false,
          }} />
    </Tab.Navigator>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>No New Notifications!</Text>
      <Button 
      onPress={() => navigation.goBack()}
      title="Go back home"
      />
    </View>
  );
}
const Stack = createStackNavigator();
function TabAScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabA Home" component={TabADetailsScreen} options={{
            headerShown: false,
          }} />
      
    </Stack.Navigator>
  );
}

type Props = {};

export class TabADetailsScreen extends Component<Props>  {
  constructor(props) {
    super(props);

    this.state = { list: [] };
  }

  componentDidMount() {
    this.setState({ list: "1"})
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={"Status: " + item.status}
      leftAvatar={{ source: { uri: item.image } }}
      bottomDivider={true}
      onPress={() => this.props.navigation.navigate('Chat')
      }
    />
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.list}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
    // const [messages, setMessages] = useState([]);
    // // const signOut = () => {
    // //     auth.signOut().then(() => {
    // //         // Sign-out successful.
    // //         navigation.replace("Login");
    // //     }).catch((error) => {
    // //         // An error happened.
    // //     });
    // // }
    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerLeft: () => (
    //             <View style={{ marginLeft: 20 }}>
    //                 {/* <Avatar
    //                     rounded
    //                     source={{
    //                         uri: auth?.currentUser?.photoURL,
    //                     }}
    //                 /> */}
    //             </View>
    //         ),
    //         headerRight: () => (
    //             <TouchableOpacity style={{
    //                 marginRight: 10
    //             }}
    //                 //onPress={signOut}
    //                 onPress = {() => navigation.navigate('Login')}
    //             >
    //                 <Text>logout</Text>
    //             </TouchableOpacity>
    //         )
    //     })
    // }, [navigation]);

    // useEffect(() => {
    //     setMessages([
    //         {
    //             _id: 1,
    //             text: 'Hello developer',
    //             createdAt: new Date(),
    //             user: {
    //                 _id: 2,
    //                 name: 'React Native',
    //                 avatar: 'https://placeimg.com/140/140/any',
    //             },
    //         },
    //     ])
    // }, [])
    // const onSend = useCallback((messages = []) => {
    //     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    // }, [])

    // return (
    //     <GiftedChat
    //         messages={messages}
    //         showAvatarForEveryMessage={true}
    //         onSend={messages => onSend(messages)}
    //         // user={{
    //         //     _id: auth?.currentUser?.email,
    //         //     name: auth?.currentUser?.displayName,
    //         //     avatar: auth?.currentUser?.photoURL
    //         // }}
    //     />
    // );
    // <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
    //   <Text>
    //     Welcome to TabA page!
    //   </Text>
    //   <Button 
    //   onPress={() => navigation.navigate('TabA Details')}
    //   title="Go to TabA Details"
    //   />
    // </View>

}
function Details() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        TabA Details here!
      </Text>
    </View>
  );
}
function TabBScreen() {
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300}}>
        Welcome to Profile page!
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         padding: 10,
//         marginTop: 100,
//     },
//     button: {
//         width: 370,
//         marginTop: 10
//     }
// })
export default Home;