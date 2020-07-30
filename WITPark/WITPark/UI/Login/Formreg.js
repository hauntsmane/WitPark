import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';
import {Actions} from 'react-native-router-flux';
import dbFunctions from '../../db/dbFunctions.js';


// var RNFS = require('react-native-fs');
const userData = require('../../data/users.json');
// const fs = require('fs');
const sha256 = require('js-sha256');
 
export default class Formreg extends Component {
 
    constructor(props){
        super(props);
        this.state={
            first: '',
            last: '',
            email:'',
            password: ''
        }
    }

    loginTRUE = () => {

        let pwhash = sha256(this.state.password);
        for (let i=0; i<5; i++){
            pwhash = sha256(pwhash);
        }

        const newUser = {
            firstName: this.state.first
            , lastName: this.state.last
            , email: this.state.email
            , passwordHash: pwhash
        }
        const jsonStr = JSON.stringify(newUser);

        //.write('../../data/users.json', jsonStr, -1);

        Actions.home()
        console.log('press')
    }
 
    saveData =async()=>{
        const {email,password,first,last} = this.state;
 
        //save data with asyncstorage
        let loginDetails={
            email: email,
            password: password,
            first: first,
            last: last
        }
        
        //Register form
        if(this.props.type == 'Formreg')
        {
            AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));

            Keyboard.dismiss();
            if(password.length == 0 || email.length == 0){
                alert("Some required fields are not entered")
            }
            else if(email = dbFunction.findValue(wp_Users, UserName, email)){
                alert("Email already exists")
            }
            else{
                dbFunctions.insertRegistration(email, password);
                alert("You successfully registered. Email: " + email + ' password: ' + password);
                this.login();
            }
        }

    }
 
    showData = async()=>{
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        alert('email: '+ ld.email + ' ' + 'password: ' + ld.password);
    }
 
    render() {
        return(
            <View style={styles.container}>
                
                 {/* firstname textbox */}
                 <TextInput style={styles.inputBox}
                onChangeText={(first) => this.setState({first})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Firstname"
                placeholderTextColor = "#000000"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>

                 {/* lastname textbox */}
                 <TextInput style={styles.inputBox}
                onChangeText={(last) => this.setState({last})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Lastname"
                placeholderTextColor = "#000000"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>
                
                {/* email textbox */}
                <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Email"
                placeholderTextColor = "#000000"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>
                
                {/* password textbox */}
                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#000000"
                ref={(input) => this.password = input}
                />
 
                {/* submit button */}
                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText} 
                    onPress={this.loginTRUE}
                    >
                        {this.props.type}
                    </Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}
 
//Styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        backgroundColor: '#eeeeee', 
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000000',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#000000',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#E7B004',
        textAlign: 'center'
    }
});
