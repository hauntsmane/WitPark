import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Linking} from 'react-native'
import { Grid, Row, Col} from 'react-native-easy-grid'

import Lot from './Lot'

export default class Lots extends Component {

    render() {
        return(
            <Grid>
                <ImageBackground source={require('../Images/Wentworth_Shield.png')} style={{width: '100%', height: '90%'}}>
                    <Row>
                        <Lot name='West Lot' occ='125/155' pass="F/S, C, V" lat={42.336606} lon={-71.096264}/> 
                    </Row>
                    <Row>
                        <Lot name='East Lot' occ='188/200' pass="O" lat={42.336412} lon={-71.094252}/> 
                    </Row>
                    <Row>
                        <Lot name='Annex Lot' occ='29/100' pass="C, O" lat={42.335235} lon={-71.093382}/> 
                    </Row>
                    <Row>
                        <Lot name='Parker St Lot' occ='450/450' pass="C, O, G" lat={42.333573} lon={-71.094481}/> 
                    </Row>
                    
                </ImageBackground>
                <Row>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={ ()=>{ Linking.openURL('https://wit.edu/public-safety/parking')}} 
                    >
                    <Text style={styles.buttonText}>Parking Pass Purchasing/Info</Text>
                   
                </TouchableOpacity>
                    </Row>
            </Grid>
        );
    }
} 

const styles = StyleSheet.create({
    lots: {
        
    }
    , button: {
        width: 300,
        backgroundColor: '#000000',
        borderRadius: 2,
        marginVertical: 15,
        paddingVertical: 5
    }
    , buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
  })