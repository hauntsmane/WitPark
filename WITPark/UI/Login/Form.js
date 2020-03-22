import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';
import {Actions} from 'react-native-router-flux';

 
export default class Form extends Component {
 
    constructor(props){
        super(props);
        this.state={
            email:'',
            password: ''
        }
    }

    loginTRUE() {
        Actions.home()
    }
 
    saveData =async()=>{
        const {email,password} = this.state;
 
        //save data with asyncstorage
        let loginDetails={
            email: email,
            password: password
        }
        
        //Register form
        if(this.props.type !== 'Login')
        {
            AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));
 
            Keyboard.dismiss();
            alert("You successfully registered. Email: " + email + ' password: ' + password);
            this.login();
        }

        //Login form
        else if(this.props.type == 'Login')
        {
            try{
                //let loginDetails = await AsyncStorage.getItem('loginDetails');
                //let ld = JSON.parse(loginDetails);
 
                //if (this.state.email != '' && this.state.password != '')
                //{
                    Actions.home();
                    // if (this.state.email == email && this.state.password == password)
                    // {
                    //     //alert('Login in!');
                    //     this.loginTRUE
                    // }
                    // else
                    // {
                    //     alert('Email and Password does not exist!');
                    // }
                    
                //}
 
            }catch(error)
            {
                alert(error);
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
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>
                
                {/* password textbox */}
                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#002f6c"
                ref={(input) => this.password = input}
                />
 
                {/* submit button */}
                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}</Text>
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
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});
