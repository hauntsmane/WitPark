import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Lot extends Component {
    
    render() {
        const {name} = this.props

        return(
            <View style={styles.lot}>
                <Text style={styles.txt}>{name}</Text>
                <View style={styles.occ}>
                    <Text style={styles.txt}>100/150</Text>
                    <Text style={styles.txt}>></Text>
                </View>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    lot: {
          
          backgroundColor: 'red'
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