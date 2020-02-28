import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";

import Counter from './Counter'
import Login from './Login/Login'

class Body extends Component {
    

    render() {
        return (
            // <Grid>
            //     <Col style={{backgroundColor:'red'}}>
            //         <Counter color={'lightblue'} size={16} />
            //         <Counter color={'skyblue'} size={32} />
            //     </Col>
            //     <Col style={{backgroundColor:'yellow'}}>
            //         <Counter color={'steelblue'} size={80} />
            //         <Counter color={'darkblue'} size={140} />
            //     </Col>
                
            // </Grid>
            <Grid>
                <Col>
                    <Login />
                </Col>
            </Grid>
        )
    }
}

export default Body

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  })