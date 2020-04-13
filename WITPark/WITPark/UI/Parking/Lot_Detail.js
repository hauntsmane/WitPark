import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Grid, Col, Row } from 'react-native-easy-grid'
import { Actions } from 'react-native-router-flux'
import getDirections from 'react-native-google-maps-directions'
 

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
    
        //this.mergeLot = this.mergeLot.bind(this);
    
      }

    //   mergeLot(){
    //     if (this.state.latitude != null && this.state.longitude!=null)
    //      {
    //        let concatLot = this.state.latitude +","+this.state.longitude
    //        this.setState({
    //          concat: concatLot
    //        }, () => {
    //          this.getDirections(concatLot, this.props.lat + ',' + this.props.lon);
    //        });
    //      }
    
    //    }

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
    /* isPass = () => {
            let end = <Text> </Text>
            if (this.props.pass.includes("F/S")){
                    end+= <Text style={styles.txt}>Faculty/Staff</Text>
            }
            if (this.props.pass.includes("V")){
                end+= <Text style={styles.txt}>Visitor</Text>
        }
            return end
        }
    */
       
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
                value: "driving"        // may be "walking", "bicycling" or "transit" as well
                }
                // , {
                // key: "dir_action",
                // value: "navigate"       // this instantly initializes navigation using the given travel mode
                // }
            ]
            // , waypoints: [
            //     {
            //     latitude: -33.8600025,
            //     longitude: 18.697452
            //     },
            //     {
            //     latitude: -33.8600026,
            //     longitude: 18.697453
            //     },
            //     {
            //     latitude: -33.8600036,
            //     longitude: 18.697493
            //     }
            // ]
        }
        
        getDirections(data)
    
    }

    isFac = () => {
        if (this.props.pass.includes("F/S")){
            return(
                <Row>
                    <Image source={require('../Images/staff_green.png')} style={{maxHeight:32, maxWidth:32}}/>
                    <Text style={styles.txt}>Faculty/Staff</Text>
                </Row>
            );
        }
        else
            return  (
                <Row>
                    <Image source={require('../Images/staff_green.png')} style={{maxHeight:32, maxWidth:32, tintColor: 'gray', opacity:0.6 }}/>
                    <Text style={grey.txt}>Faculty/Staff</Text>
                </Row>
            );
        
    }
    isCom = () => {
        if (this.props.pass.includes("C")){
            return(
                <Row>
                    <Image source={require('../Images/student.png')} style={{maxHeight:32, maxWidth:32}}/>
                    <Text style={styles.txt}>Student Commuter</Text>
                </Row>
            );
        }
        else
            return(
                <Row>
                    <Image source={require('../Images/student.png')} style={{maxHeight:32, maxWidth:32, tintColor: 'gray', opacity:0.6}}/>
                    <Text style={grey.txt}>Student Commuter</Text>
                </Row>
            );

    }
    isVis = () => {
        if (this.props.pass.includes("V")){
            return(
                <Row>
                 <Image source={require('../Images/visitor.png')} style={{maxHeight:32, maxWidth:32}}/>
                    <Text style={styles.txt}>Visitor</Text>
                </Row>
            );
        }
        else
            return(
                <Row>
                    <Image source={require('../Images/visitor.png')} style={{maxHeight:32, maxWidth:32, tintColor: 'gray', opacity:0.6}}/>
                    <Text style={grey.txt}>Visitor</Text>
                </Row>
                
            ); 
    }
    isOver = () => {
        if (this.props.pass.includes("O")){
            return(
                <Row>
                    <Image source={require('../Images/overnight.png')} style={{maxHeight:32, maxWidth:32}}/>
                    <Text style={styles.txt}>Overnight</Text>
                </Row>
            );
        }
        else
            return(
                <Row>
                    <Image source={require('../Images/overnight.png')} style={{maxHeight:32, maxWidth:32, tintColor: 'gray', opacity:0.6}}/>
                    <Text style={grey.txt}>Overnight</Text>
                </Row>
            );  
    }
    isMoto = () => {
        if (this.props.pass.includes("M")){
            return(
                <Row>
                    <Image source={require('../Images/motorcycle.png')} style={{maxHeight:32, maxWidth:32}}/>
                    <Text style={styles.txt}>Motorcycle</Text>
                </Row>
            );
        }
        else
            return(
                <Row>
                    <Image source={require('../Images/motorcycle.png')} style={{maxHeight:32, maxWidth:32, tintColor: 'gray', opacity:0.6}}/>
                    <Text style={grey.txt}>Motorcycle</Text>
                </Row>
            );
    }

    render() {
        const lot = this.props.title;
        const occ = this.props.occ;
        const pass = this.props.pass;

        return(
            <ScrollView>
            <Grid>
                <Row >
                    {/* <Row>
                        <Col>
                            <Text style={styles.txt}>Name: {lot}</Text>
                        </Col>
                        <Col>
                        
                        </Col>
                    </Row> */}
                    <Col size={50}></Col>
                    <Col size={50}>
                        <ImageBackground 
                        source={require('../Images/car_shadow.png')} 
                        style={styles.lotpic} 
                        resizeMode='contain'>
                            <Text style={[styles.txt, styles.occ]}>{occ}</Text>
                        </ImageBackground>
                    </Col>
                </Row>
                <Row >
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.GotoMap}  
                    >
                        <Text style={styles.buttonText}>Get Directions!</Text>
                    </TouchableOpacity>
                </Row>
                {/* <Row size={3}>  
                <Image source={require('../Images/staff_green.png')} style={{maxHeight:32, maxWidth:32}}/>                  
                    <Row>
                        <Text style={styles.txt}>Parking Pass Info:</Text> 
                    </Row>
                        <Row>{this.isFac()}</Row>
                        
                        <Row>{this.isCom()}</Row>
                        
                        <Row>{this.isVis()}</Row>
                        
                        <Row>{this.isOver()}</Row>
                        
                        <Row>{this.isGuest()}</Row>
                    </Row> */}
                    <View>
                <Row>
                    <Text style={styles.txt}>Parking Pass Info:{'\n'}</Text> 
                </Row>

                    {this.isFac()}

                    
                    {this.isCom()}


                    {this.isVis()}

                    
                    {this.isOver()}


                    
                    {this.isMoto()}

                </View>
                {/* <Row style={{backgroundColor: 'red'}}>
                    {this.isLotFull()}
                </Row>     */}
            </Grid>
            </ScrollView>
        );
    }
} 

export default Lot_Detail

const styles = {
    occ: {
        color:'white'        
    }

    , lotpic: {
        width: '100%'
        , height: 100
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
        width: 250,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 65,
        paddingVertical: 15
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