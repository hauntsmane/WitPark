import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import {Actions} from 'react-native-router-flux';
import Eventform from './eventfrom'

export default class Events extends Component {
   

   
    render() {
        return(
            <Row>
            <TouchableOpacity
                style={styles.button}
                onPress={this.events} 
                >
            <Text style={styles.buttonText}>Events</Text>
            </TouchableOpacity>
            </Row>
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
