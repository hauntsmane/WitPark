import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';
import {Actions} from 'react-native-router-flux';
import dbFunctions from '../../db/dbFunctions.js';
 
export default class Eventform extends Component {
 
    constructor(props){
        super(props);
        this.state={
            email:'',
            password: ''
        }
    }

    event(){
        Actions.Events()
    }
 
    saveData =async()=>{
        const {email,password} = this.state;
 
        //save data with asyncstorage
        let loginDetails={
            email: email,
            password: password
        }
        
      

        //Login form
         if(this.props.type == 'Login')
        {
            if(password.length == 0 || email.length == 0){
                alert("Some required fields are not entered")
            }
            else if(password == getLogin(email, password)){
                try{
                    Actions.home();
 
                }catch(error)
                    {
                     alert(error);
                }
            }
            else{
                alert("Either Email or password is incorrect")
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
                    <Text style={styles.buttonText} onPress={this.loginTRUE}>{this.props.type}</Text>
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
