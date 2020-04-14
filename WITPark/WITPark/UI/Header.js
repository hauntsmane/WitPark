import React, { Component } from 'react'
//import { View, Text, StyleSheet } from 'react-native'
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
//import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu'
import {Actions} from 'react-native-router-flux';
import { Grid, Col, Row } from 'react-native-easy-grid'  

class Header extends Component {
    
    signOut(){
        Actions.login()
    }

    addSignOutBtn = () => {

    }
   
    render() {
        return (
            
            <View className='Header' style={styles.container}>
                <Grid>
                    <Col style={{justifyContent:'center', paddingLeft: 10}}>
                        <Image source={require('./Images/witpark_title.png')} style={{height:'70%', width:'70%'}}/>
                    </Col>
                    <Col style={{justifyContent:'center', alignItems:'flex-end' }}>

                        {this.addSignOutBtn()}
                        <TouchableOpacity onPress={ this.signOut}>
                            <Text style={styles.logout}>Signout</Text>
                        </TouchableOpacity>
                    </Col>
                </Grid>
            </View>
        );
    }
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 50,
        position: 'relative',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'stretch'
        , shadowColor: '#000000'
        , shadowOffset: { width: 1, height: 1 }
        , shadowOpacity: 0.3
        , elevation: 4
    },
    logo: {
        color: 'white',
        marginTop: 20,
        fontSize: 20,
        left: 20
    },
    logout: {
        color: 'white'
        , fontSize: 17
        , marginRight: 10
        , padding: 4
        , borderColor: '#000'
        , borderWidth: 1
        , borderRadius: 5
        , backgroundColor: '#6e6e6e'
    }
  })
  