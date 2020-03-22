import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Grid, Col, Row } from 'react-native-easy-grid'

class Lot_Detail extends Component {
    

    render() {
        const lot = this.props.title;

        return(
            <Grid>
                <Row>
                    <Text>
                       {lot}
                    </Text>
                </Row>
            </Grid>
        );
    }
} 

export default Lot_Detail