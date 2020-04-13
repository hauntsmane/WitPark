import React, { Component } from 'react'
//import { View, Text, StyleSheet } from 'react-native'
import { Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
//import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu'
import {Actions} from 'react-native-router-flux';
import { Grid, Col, Row } from 'react-native-easy-grid'  

class Header extends Component {
    
    signOut(){
        Actions.login()
    }

   
    render() {
        return (
            
            <View className='Header' style={styles.container}>
             <Grid>
             <Col>
               <Text className="logo" style={styles.logo}>WITPark</Text>
              </Col>
              <Col>
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
        backgroundColor: '#A7A9AC',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    logo: {
        color: 'white',
        marginTop: 20,
        fontSize: 20,
        left: 20
    },
    logout: {
        color: 'white',
        marginTop: 25,
        fontSize: 15,
        left: 115
    }
  })
  