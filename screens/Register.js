import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native'
import { Input, Button } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SafeAreaView,
    Text, Alert
 } from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import Home from './Home';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';
import { NavigationContainer } from '@react-navigation/native';




const Register = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');
    // ... 
    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // ...
                user.updateProfile({
                    displayName: name,
                    photoUrl: avatar ? avatar : "https://gravatar.com/avatar/94d45dbdba988afacf30d916e7aaad69?s=200&d=mp&r=x",
                })
                    .catch((error) => {
                        alert(error.message)
                    })
                navigation.navigate('Home')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
                alert(errorMessage);
            });
    }
   //...
    return (
        <View style={styles.container}>
            <Input
                placeholder='Enter your name'
                label='Name'
                value={name}
                onChangeText={text => setName(text)}
            />
            <Input
                placeholder='Enter your email'
                label='Email'
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder='Enter your password'
                label='Password'
                value={password} onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Input
                placeholder='Enter your image url'
                label='Profile Picture'
                value = {avatar}
                onChangeText={text => setAvatar(text)}
            />
            <Button
                title="register" onPress={register} style={styles.button}
            />
        </View>
    )
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
export default Register;