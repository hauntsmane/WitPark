import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import {Actions} from 'react-native-router-flux';

export default class Lot extends Component {
    handleClick = () => {
        Actions.lot_detail({title: this.props.name
                          , occ: this.props.occ
                          , pass: this.props.pass
                          , lat: this.props.lat
                          , lon: this.props.lon})
    }

    canPark = (passType, imgLoc) => {
        if(this.props.pass.includes(passType))
        return(
            <Row>
                <Image source={imgLoc} style={styles.passIcon}/></Row>
        )
    }
    render() {
        const name = this.props.name
        const occ = this.props.occ
        const pass = this.props.pass

        return(

                <Grid style={styles.lot}>
                    <Row style={styles.lotRow} onPress={this.handleClick}>
                        <Col size={1}>
                            <Text style={styles.txt}>{name}</Text>
                        </Col>
                        <Col size={1}>
                            <Row style={{alignItems:'center'}}>
                            {this.canPark('F', require('../Images/staff_green.png'))}
                            {this.canPark('C', require('../Images/student.png'))}
                            {this.canPark('V', require('../Images/visitor.png'))}
                            {this.canPark('O', require('../Images/overnight.png'))}
                            {this.canPark('M', require('../Images/motorcycle.png'))}</Row>
                        </Col>
                        <Col size={1}>
                            <Text style={styles.txt}>{occ}</Text>
                        </Col>
                        
                    </Row>
                    
                </Grid>

            
        );
    }
} 

const styles = StyleSheet.create({
    lot: {
        backgroundColor: '#a7a9acf2'
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
    }

    , lotRow: {
        width: '100%'
        , height: '100%'
        , flex: 1
        , alignItems:'center'
    }
    , txt: {
        fontSize:25
        , fontWeight:'bold'
        
    }
    , passIcon: {
        maxHeight:32
        , maxWidth:32
        , justifyContent:'center'
    }
  })