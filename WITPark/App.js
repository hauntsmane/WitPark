import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Counter from './UI/Counter'
import Header from './UI/Header'
import Body from './UI/Body'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Body />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
})