import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import {Input, Button, ThemeConsumer} from 'react-native-elements';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import Register from './Register'
import Chat from './Chat'
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';


const Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onLoginPress = () => {
        
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigation.navigate('Home')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Login failed.')
        })
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder='Enter your email'
                label='Email'
                leftIcon={{ type: 'material', name: 'email' }}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder='Enter your password'
                label='Password'
                leftIcon={{ type: 'material', name: 'lock' }}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Button title="sign in"  onPress={onLoginPress} style={styles.button} />
            <Button title="register" onPress={() => navigation.navigate('Register')} style={styles.button} />
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
});

export default Login;