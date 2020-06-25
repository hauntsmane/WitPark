import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground, Linking} from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import {Actions} from 'react-native-router-flux';
import { WebView } from 'react-native-webview';
//import Eventform from './eventform'

export default class Events extends Component {
   

   
    render() {
        return(
            <Grid>
            <Col style ={styles.eventcol}>
              <Text style={styles.txt}>Latest</Text>
              <Row>
              <WebView
               source={{
               uri: 'https://wit.edu/covid-19-online-classes'
                 }}
                style={{ marginTop: 10 }}
                />
              </Row>
            </Col>
            <Row>
            
            <Col style ={styles.eventcol}>
            <Text style={styles.txt}>All</Text>
              <Row>
              <WebView
               source={{
               uri: 'https://wit.edu/news'
                 }}
                style={{ marginTop: 10 }}
                />
                </Row>
                <Row style ={styles.buttonRow}>
               <TouchableOpacity
                    style={styles.button}
                    onPress={ ()=>{ Linking.openURL('https://wit.edu/calendar/university-events')}}
                    >
                  <Text style={styles.buttonText}>All Events</Text>
              </TouchableOpacity>   
              </Row>
            </Col>
            </Row>
            </Grid>
            
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
      width: 160,
      backgroundColor: '#f47521',
      borderRadius: 25,
      marginVertical: 0,
      paddingVertical: 15,
      textAlign: "center",
  },

  txt: {
    fontSize:24,
   
},
  
 buttonText: {
  fontSize: 20,
  fontWeight: '500',
  color: 'white',
  textAlign: 'center'
},
  event: {
    backgroundColor: '#ffffffc3'
    , padding: 10
    , flex: 1
    , justifyContent: 'space-around'
    , alignItems: 'center'
    , flexDirection: 'row'
    , margin:5
    , borderRadius:20
    , shadowColor: '#000000'
    , shadowOffset: { width: 1, height: 1 }
    , shadowOpacity: 0.3
    , elevation: 2
},
eventcol: {
  width: '100%'
  , height: '100%'
  , flex: 1
  , alignItems:'center'
  , backgroundColor: '#CDCCC8'
},
buttonRow: {
  height: '20%',
}
});
