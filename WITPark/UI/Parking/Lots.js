import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { Grid, Row, Col} from 'react-native-easy-grid'

import Lot from './Lot'

export default class Lots extends Component {

    render() {
        return(
            <Grid>
                <ImageBackground source={require('../Images/Wentworth_Shield.png')} style={{width: '100%', height: '100%'}}>
                    <Row>
                        <Lot name='West Lot' occ='125/155' /> 
                    </Row>
                    <Row>
                        <Lot name='East Lot' occ='188/200' /> 
                    </Row>
                    <Row>
                        <Lot name='Annex Lot' occ='29/100' /> 
                    </Row>
                    <Row>
                        <Lot name='Parker St Lot' occ='450/450' /> 
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