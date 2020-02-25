import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Counter from './Counter'

class Body extends Component {
    

    render() {
        return (
            <View className='Body' style={styles.container}>
                <Counter color={'lightblue'} size={16} />
                <Counter color={'skyblue'} size={32} />
                <Counter color={'steelblue'} size={80} />
                <Counter color={'darkblue'} size={140} />
            </View>
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