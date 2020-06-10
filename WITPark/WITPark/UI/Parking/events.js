import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import {Actions} from 'react-native-router-flux';
//import Eventform from './eventform'

export default class Events extends Component {
   

   
    render() {
        return(
            <ScrollView>
            <Grid>  
            <Col>
              <Row>
              <Text style={styles.txt}>Latest</Text>
              </Row>
              <Row>
               <Text style={styles.txt}>Insert latest events</Text> 
              </Row>
            </Col>
            <Col>
              <Row>
               <Text style={styles.txt}>Upcoming</Text> 
              </Row>
              <Row>
              <Text style={styles.txt}>Insert all events</Text> 
              </Row>
            </Col>
            </Grid>
            </ScrollView>
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
  },
  txt: {
    fontSize:20
}
});
