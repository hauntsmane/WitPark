import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native'
import { Grid, Col, Row } from 'react-native-easy-grid'

class Lot_Detail extends Component {
    
//need to add directions and parking restrictions
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
                    <Row>
                        <Col>
                            <Text>Name: {lot}</Text>
                        </Col>
                        <Col>
                        
                        </Col>
                    </Row>
                    <Row>
                        <ImageBackground 
                        style={{backgroundColor:'black'
                        , width: '100%'
                        , height: '100%'}} >
                            <Text style={{color:'white', fontSize:15}}>{occ}</Text>
                        </ImageBackground>
                    </Row>
                </Row>
                <Row>
                    <Text>Parking Pass Info</Text> 
                </Row>
                <Row>
                    {this.isLotFull()}
                </Row>
                
            </Grid>
        );
    }
} 

export default Lot_Detail