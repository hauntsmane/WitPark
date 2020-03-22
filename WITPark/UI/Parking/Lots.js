import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { Grid, Row, Col} from 'react-native-easy-grid'

import Lot from './Lot'

export default class Lots extends Component {
    
    render() {
        const {name} = this.props

        return(
            <Grid>
                <ImageBackground source={require('../Images/Wentworth_Shield.png')} style={{width: '100%', height: '100%'}}>
                    <Row>
                    <Lot name='West Lot' /> 
                    </Row>
                    <Row>
                    <Lot name='East Lot' /> 
                    </Row>
                    <Row>
                    <Lot name='Annex Lot' /> 
                    </Row>
                    <Row>
                    <Lot name='Parker St Lot' /> 
                    </Row>
                </ImageBackground>
            </Grid>
        );
    }
} 

const styles = StyleSheet.create({
    lots: {
        
    }
  })