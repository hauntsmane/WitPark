import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Linking} from 'react-native'
import { Grid, Row, Col} from 'react-native-easy-grid'
import {Actions} from 'react-native-router-flux';

import Lot from './Lot';
import Events from './events'
/*import dbFunctions from './db/dbFunctions'

w = 'tst'
e = getOccupancy('EastLot')
a = getOccupancy('AnnexLot')
p = getOccupancy('ParkerStLot')*/

export default class Lots extends Component {

    events() {
        Actions.events()
    }


    render() {
        return(
            <Grid style={{backgroundColor:'#000'}}>
                <ImageBackground source={require('../Images/campus.jpg')} style={{width: '100%', height: '100%'}}>
                    <Lot name='West Lot' occ='125/155' pass="F, V, M" lat={42.336606} lon={-71.096264}/> 
                    <Lot name='East Lot' occ='188/200' pass="O" lat={42.336412} lon={-71.094252}/> 
                    <Lot name='Annex Lot' occ='29/100' pass="C, O" lat={42.335235} lon={-71.093382}/> 
                    <Lot name='Parker St Lot' occ='450/450' pass="C, O" lat={42.333573} lon={-71.094481}/> 

                    <Row>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={this.events} 
                        >
                            <Text style={styles.buttonText}>Events</Text>
                        </TouchableOpacity>
                    </Row>
                    <Row>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={ ()=>{ Linking.openURL('https://wit.edu/public-safety/parking')}} 
                        >
                            <Text style={styles.buttonText}>Parking Pass Purchasing/Info</Text>
                        </TouchableOpacity>
                    </Row>
                    
                </ImageBackground>
                
            </Grid>
        );
    }
} 

const styles = StyleSheet.create({
    lots: {
        
    }
    , button: {
        width: 300,
        backgroundColor: '#f47521',
        borderRadius: 20,
        margin: 5,
        paddingVertical: 5,
        justifyContent:'center',
        flex:1,
        shadowColor: '#000000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0,
        elevation: 5

    }
    , buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
  })