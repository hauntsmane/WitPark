import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Grid, Col, Row } from 'react-native-easy-grid'
import { Actions } from 'react-native-router-flux'
import getDirections from 'react-native-google-maps-directions'

import LotMap from '../Maps/LotMap'
// import Pred_Occ from './Pred_Occ' 

class Lot_Detail extends Component {
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
    
    
    }

      //checks to see if the lot if full then display button if full
    isLotFull = () => {
        let current = this.props.occ.split('/')[0]
        let max = this.props.occ.split('/')[1]

        if (current == max){
            return (
            <Row>
                <Text style={styles.txt}>Lot full?</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => ( alert('Email goes here.'))}
                >
                    <Text style={styles.buttonText}>Notify Me!</Text>
                </TouchableOpacity>
            </Row>
            
            );
        }
        return null
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

    GotoMap= () => {
        //Actions.map({lat: this.props.lat, lon: this.props.lon, title:this.props.title})
        const data = {
            source: {
                latitude: this.state.latitude,
                longitude: this.state.longitude
            }
            , destination: {
                latitude: this.props.lat,
                longitude: this.props.lon
            }
            , params: [
                {
                key: "travelmode",
                value: "driving"        
                }
              
            ]
        }
        
        getDirections(data)
    
    }
    //determines if a parking pass is greyed out or not
    canPark = (passType, person, imgLoc ) => {
        return(
            <Row>
                <Image source={imgLoc} style={{maxHeight:32, maxWidth:32, 
                    tintColor: (this.props.pass.includes(passType) ? 'none' : 'gray'),
                    opacity: (this.props.pass.includes(passType) ? 1 : 0.6)
                }}/>
                <Text style={[styles.txt, {
                    color: (this.props.pass.includes(passType) ? '#000000' : '#999999')
                }]}>{person}</Text>
            </Row>
        )
    }

    render() {
        const lot = this.props.title;
        const occ = this.props.occ;
        const pass = this.props.pass;

        return(
            <ScrollView>
            <Grid>
            <ImageBackground source={require('../Images/aerial.jpg')} style={{width: '100%', height: '100%'}}>
            <Row style={{padding:10}}>
                <Col>
                    <LotMap lat={this.props.lat} lon={this.props.lon} style={{borderRadius:30}}/>
                    <Text style={{height:200}} ></Text>
                </Col>
            </Row>
                <Row>
                <Col size={55}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.GotoMap}  
                        >
                            <Text style={styles.buttonText}>Get Directions!</Text>
                        </TouchableOpacity>
                    </Col>
                    <Col size={45}>
                        <ImageBackground 
                        source={require('../Images/car_shadow.png')} 
                        style={styles.lotpic} 
                        resizeMode='contain'>
                            <Text style={[styles.txt, styles.occ]}>{occ}</Text>
                        </ImageBackground>
                    </Col>
                    
                </Row>

                {/* <Pred_Occ lotName={lot} /> */}

                <View style={styles.page}>
                    <Row>
                        <Text style={styles.txt}>Parking Pass Info:{'\n'}</Text> 
                    </Row>
                    {this.canPark('F', 'Faculty/Staff', require('../Images/staff_green.png'))}
                    {this.canPark('C', 'Student Commuter', require('../Images/student.png'))}
                    {this.canPark('V', 'Visitor', require('../Images/visitor.png'))}
                    {this.canPark('O', 'Overnight', require('../Images/overnight.png'))}
                    {this.canPark('M', 'Motorcycle', require('../Images/motorcycle.png'))}
                </View>
                {/* <Row style={{backgroundColor: 'red'}}>
                    {this.isLotFull()}
                </Row>     */}
            </ImageBackground>
            </Grid>
            </ScrollView>
        );
    }
} 

export default Lot_Detail

const styles = {
    page: {
        backgroundColor: '#ffffffc3'
        , padding: 10
        , flex: 1
        // , justifyContent: 'space-around'
        // , alignItems: 'center'
        // , flexDirection: 'row'
        , margin:5
        , borderRadius:20
        , shadowColor: '#000000'
        , shadowOffset: { width: 1, height: 1 }
        , shadowOpacity: 0.3
        , elevation: 2
    }
    
    , occ: {
        color:'white'        
    }

    , lotpic: {
        width: '100%'
        , height: 100
        , paddingVertical: -50
        , justifyContent: 'center'
        , alignItems: 'center'
    }

    , txt: {
        fontSize:20
    }

    , btn: {
        backgroundColor: 'blue'
        , borderRadius: 10
        , padding: 10

    }

    , button: {
        // width: 250,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        // marginVertical: 10,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
    , buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
}
const grey = {
     txt: {
        fontSize: 20,
        color: '#BBBBBB'
    }
}