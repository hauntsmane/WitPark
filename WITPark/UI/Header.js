import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Header extends Component {
    

    render() {
        return (
            <View className='Header' style={styles.container}>
                <Text className="logo" style={styles.logo}>Test</Text>
            </View>
        )
    }
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 50,
        position: 'relative',
        backgroundColor: '#454545',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    logo: {
        color: 'white',
        fontSize: 20,
        left: 20
    }
  })