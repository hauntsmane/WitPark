import React, { Component } from 'react';
//import {View, StyleSheet} from 'react-native';
//import MapView, {Marker} from 'react-native-maps';
import { AppRegistry, StyleSheet, Dimensions, Image, View, StatusBar, TouchableOpacity } from "react-native";

import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';


const mapStyles = {
    width: '100%',
    height: '100%'
  };
  


export default class LotMap extends Component {
   
  

      constructor(props) {
        super(props);
        
      

        this.state = {
          latitude: null,
          longitude: null,
          error: null,
          concat: null,
          coords:[],
          x: 'false',
          cordLatitude: this.props.lat,
          cordLongitude: this.props.lon,
        };
    
        this.mergeLot = this.mergeLot.bind(this);
    
      }
    
      componentDidMount() {
        navigator.geolocation.getCurrentPosition(
           (position) => {
             this.setState({
               latitude: position.coords.latitude,
               longitude: position.coords.longitude,
               error: null,
             });
             this.mergeLot();
           },
           (error) => this.setState({ error: error.message }),
           { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
         );
    
       }
    
      mergeLot(){
        if (this.state.latitude != null && this.state.longitude!=null)
         {
           let concatLot = this.state.latitude +","+this.state.longitude
           this.setState({
             concat: concatLot
           }, () => {
             this.getDirections(concatLot, this.props.lat + ',' + this.props.lon);
           });
         }
    
       }
    
       async getDirections(startLoc, destinationLoc) {
    
             try {
               console.log(startLoc)
               console.log(destinationLoc)
                 let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }`)
                 let respJson = await resp.json();
                 console.log(respJson)
                 let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
                 let coords = points.map((point, index) => {
                     return  {
                         latitude : point[0],
                         longitude : point[1]
                     }
                 })
                 this.setState({coords: coords})
                 this.setState({x: "true"})
                 return coords
             } catch(error) {
               console.log('no bueno')
                 this.setState({x: "error"})
                 return error
             }
         }
    
  
  render() {

    const lat = this.props.lat
    const lon = this.props.lon
    return (
      <MapView style={styles.map} initialRegion={{
       latitude: lat,
       longitude: lon,
       latitudeDelta: 0,
       longitudeDelta: 0.007 //change this to zoom in/out init zoom (larger # = zoom out)
      }}>

      {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
         coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
         title={"Your Location"}
       />}

       {!!this.state.cordLatitude && !!this.state.cordLongitude && <MapView.Marker
          coordinate={{"latitude":this.state.cordLatitude,"longitude":this.state.cordLongitude}}
          title={"Your Destination"}
        />}

       {!!this.state.latitude && !!this.state.longitude && this.state.x == 'true' && <MapView.Polyline
            coordinates={this.state.coords}
            strokeWidth={2}
            strokeColor="red"/>
        }

        {!!this.state.latitude && !!this.state.longitude && this.state.x == 'error' && <MapView.Polyline
          coordinates={[
              {latitude: this.state.latitude, longitude: this.state.longitude},
              {latitude: this.state.cordLatitude, longitude: this.state.cordLongitude},
          ]}
          strokeWidth={2}
          strokeColor="red"/>
         }
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
