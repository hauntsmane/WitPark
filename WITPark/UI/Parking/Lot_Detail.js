import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { Grid, Col, Row } from 'react-native-easy-grid'

class Lot_Detail extends Component {
    
//need to add directions and parking restrictions
    isLotFull = () => {
        let current = this.props.occ.split('/')[0]
        let max = this.props.occ.split('/')[1]

        if (current == max){
            return (
            <Row>
                <Text style={styles.txt}>Lot full?</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => ( alert('Email goes here.'))}
                >
                    <Text style={styles.buttonText}>Notify Me!</Text>
                </TouchableOpacity>
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
                            <Text style={styles.txt}>Name: {lot}</Text>
                        </Col>
                        <Col>
                        
                        </Col>
                    </Row>
                    <Row>
                        <ImageBackground style={styles.lotpic} >
                            <Text style={[styles.txt, styles.occ]}>{occ}</Text>
                        </ImageBackground>
                    </Row>
                </Row>
                <Row>
                    <Text style={styles.txt}>Parking Pass Info</Text> 
                </Row>
                <Row>
                    {this.isLotFull()}
                </Row>
                
            </Grid>
        );
    }
} 

export default Lot_Detail

const styles = {
    occ: {
        color:'white'        
    }

    , lotpic: {
        backgroundColor:'black'
        , width: '100%'
        , height: '100%'
        , justifyContent: 'center'
        , alignItems: 'center'
    }

    , txt: {
        fontSize:20
    }

    , btn: {
        backgroundColor: 'blue'
        , borderRadius: 10
        , padding: 10

    }

    , button: {
        width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    }
    , buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
}