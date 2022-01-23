import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import {Input, Button} from 'react-native-elements';
import {
   SafeAreaView,
   Text, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Register from './Register';

//import { Register } from 'Register.js';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            <Button title="sign in" style={styles.button} />
            <Button
               title="register"
               //onPress={() => Alert.alert(
               //   'You pressed the register button !')}

               onPress={() => navigation.navigate('Register')}
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
});

export default Login;