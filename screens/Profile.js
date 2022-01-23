import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native'
import { Input, Button } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SafeAreaView,
    Text, Alert
 } from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';


function Profile() {
   return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text>Profile!</Text>
     </View>
   );
 }



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
export default Profile;