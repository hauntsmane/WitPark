import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import Routes from './Routes';

export default class Body extends Component   {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#002f6c" 
          barStyle="light-content"
        />
        <Routes/>

        {/* <Grid>
                <Col>
                    <View className='Body' style={styles.container}>
                        <Lot name={'West Lot'}/>
                        <Lot name={'East Lot'}/>
                        <Lot name={'Annex Lot'}/>
                        <Lot name={'Parker St Lot'}/>
                    </View>
                </Col>
            </Grid> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});