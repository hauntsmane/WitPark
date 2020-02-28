//Packages go first
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

//Then created components
import Counter from './UI/Counter'
import Header from './UI/Header'
import Body from './UI/Body'

//define the class
export default class App extends Component {
  //state can go here when it needs it

  //render and return at the bottom of class definition
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Body />
      </View>
    )
  }
} //can also put export default Classname here if not on top

//styles at the bottom of the page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
})