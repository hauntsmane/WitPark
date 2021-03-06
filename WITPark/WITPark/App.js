import 'react-native-gesture-handler';
//Packages go first
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';

//Then created components
import Header from './UI/Header'
import Body from './UI/Body'

//define the class
export default class App extends Component {
  //state can go here when it needs it

  //render and return at the bottom of class definition
  render() {
    return (
      <NavigationContainer>
        <View style={styles.container}>
          <Header />
          <Body />
        </View>
      </NavigationContainer>

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