import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Actions} from 'react-native-router-flux';


const mapStyles = {
    width: '100%',
    height: '100%'
  };
  


export default class LotMap extends Component {
    render() {

      const lat = this.props.lat
      const lon = this.props.lon
        return ( 
          <View style={styles.container}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: lat, //NS
                longitude: lon, //EW
                latitudeDelta: 0,
                longitudeDelta: 0.05,
              }}>
              <Marker
                coordinate={{
                  latitude: lat,
                  longitude: lon,
                }}
                title="Demo"
                description="Parking Lot Location"
              />
            </MapView>
          </View>       
        );
      }
    }
        


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      map: {
        height: '100%',
        width: '100%',
      },
    });