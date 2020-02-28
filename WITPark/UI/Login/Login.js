import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Login extends Component {

  render() {
    return(
      <Grid style={{backgroundColor:'purple'}}> 
        <Row size={50}>
          <Row style={{backgroundColor:'blue'}} size={1}>
            <Text>Test</Text>
          </Row>
          <Row style={{backgroundColor:'green'}} size={1}>
            <Text>Test2</Text>
          </Row>
        </Row>
        <Row size={25}>

        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
    
  })