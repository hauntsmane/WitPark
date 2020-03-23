import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { Grid, Col, Row } from 'react-native-easy-grid'

class Lot_Detail extends Component {
    
//lot occupancy
//lot image
//pass info
    isLotFull = () => {
        let current = this.props.occ.split('/')[0]
        let max = this.props.occ.split('/')[1]

        if (current == max){
            return (
            <Row>
                <Text>Lot full?</Text>
                <Button 
                    title='Notify Me!' 
                    onPress={() => ( alert('Email goes here.'))}
                />
            </Row>
            
            );
        }
        return null
    }

    render() {
        const lot = this.props.title;
        const occ = this.props.occ;

        return(
            <Grid>
                <Row>
                    <Text>Name: {lot}</Text>
                </Row>
                <Row>
                    <Text>Occupancy: {occ}</Text>
                </Row>
                <Row>
                    <Image style={{backgroundColor:'black'
                                , width: '100%'
                                , height: '100%'}} />
                </Row>
                <Row>
                    {this.isLotFull()}
                </Row>
                
            </Grid>
        );
    }
} 

export default Lot_Detail