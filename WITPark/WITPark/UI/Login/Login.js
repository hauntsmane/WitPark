import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native'; 
import {Actions} from 'react-native-router-flux';
import Form from './Form';

export default class Login extends Component {
 
    signup() {
        Actions.signup()
    }
    //uses form.js and renders with login info
    render() {
        return(
            <View style={styles.container}>
                <Form type="Login"/>
                <View style={styles.signupTextCont}> 
                    <Text style={styles.signupText}>Dont have an account yet? </Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}>Sign Up</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    signupTextCont: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 16,
      flexDirection: 'row',
    },
    signupText: {
      color: '#000000', 
      fontSize:16,
    },
    signupButton: {
        color: '#E7B004',
        fontSize:16,
        fontWeight: '500',
    }
});
