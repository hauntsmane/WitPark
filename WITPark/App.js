// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { apiResponse: "no" };
//   }
//   state = {count: 0}

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({count: this.state.count + 1})
//     }, 1000)
//   }

//   callAPI() {
//       fetch("http://localhost:9000/testAPI")
//           .then(res => res.text())
//           .then(res => this.setState({ apiResponse: res }));
//   }

//   componentWillMount() {
//       this.callAPI();
//   }

//   render(){
//     let {count1} = this.state.count
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text className="App-intro">Working? --> {this.state.apiResponse}</Text>
//         <Text>Button Pressed {count1} times!</Text>
//         {/* <Button onPress={addUp}>Press Me!</Button> */}
//       </View>
//     );
//   }
  
// }
// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Counter extends Component {

  state = {count: 0}

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  render() {
    const {count} = this.state
    const {color, size} = this.props

    return (
      <Text style={{color, fontSize: size}}>
        {count}
      </Text>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter color={'lightblue'} size={16} />
        <Counter color={'skyblue'} size={32} />
        <Counter color={'steelblue'} size={80} />
        <Counter color={'darkblue'} size={140} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})