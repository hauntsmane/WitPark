import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";

import Counter from './Counter'
import Lot from './Parking/Lot'
import Login from './Login/Login'

class Body extends Component {
    

    render() {
        return (
            // <View className='Body' style={styles.container}>
            //     <Lot name={'West Lot'}/>
            //     <Lot name={'East Lot'}/>
            //     <Lot name={'Annex Lot'}/>
            //     <Lot name={'Parker St Lot'}/>
            // </View>

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
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
  })