import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Counter from './Counter'
import Lot from './Parking/Lot'

class Body extends Component {
    

    render() {
        return (
            <View className='Body' style={styles.container}>
                {/* <Counter color={'lightblue'} size={16} />
                <Counter color={'skyblue'} size={32} />
                <Counter color={'steelblue'} size={80} />
                <Counter color={'darkblue'} size={140} /> */}
                <Lot name={'West Lot'}/>
                <Lot name={'East Lot'}/>
                <Lot name={'Annex Lot'}/>
                <Lot name={'Parker St Lot'}/>
            </View>
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