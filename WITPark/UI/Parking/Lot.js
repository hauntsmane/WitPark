import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import {Actions} from 'react-native-router-flux';

export default class Lot extends Component {
    handleClick = () => {
        Actions.lot_detail({title:this.props.name
                          , occ:this.props.occ})
    }
    render() {
        const name = this.props.name
        const occ = this.props.occ

        return(

                <Grid style={styles.lot}>
                    <Row style={{backgroundColor:'red'}} onPress={this.handleClick}>
                        <Col size={3}>
                            <Text style={styles.txt}>{name}</Text>
                        </Col>
                        <Col size={1}>
                            <Text style={styles.txt}>{occ}</Text>
                        </Col>
                        <Col size={1}>
                            <Text style={styles.txt}>></Text>
                        </Col>
                    </Row>
                    
                </Grid>

            
        );
    }
} 

const styles = StyleSheet.create({
    lot: {
          
          backgroundColor: '#bababacf'
        , borderBottomColor: 'blue'
        , borderBottomWidth: 2
        , padding: 10
        , flex: 1
        , justifyContent: 'space-around'
        , alignItems: 'center'
        , flexDirection: 'row'
    }
    , occ: {
        justifyContent: 'flex-end'
        , backgroundColor: 'green'
    }
    , txt: {
        fontSize:15
        
    }
  })