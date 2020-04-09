import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
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
            <Text style={styles.txt}>Faculty/Staff</Text>
            )
        }
        else
            return  <Text style={grey.txt}>Faculty/Staff</Text>
        
    }
    isCom = () => {
        if (this.props.pass.includes("C")){
            return(
            <Text style={styles.txt}>Commuter</Text>
            )
        }
        else
            return  <Text style={grey.txt}>Commuter</Text>
    }
    isVis = () => {
        if (this.props.pass.includes("V")){
            return(
            <Text style={styles.txt}>Visitor</Text>
            )
        }
        else
            return  <Text style={grey.txt}>Visitor</Text>
    }
    isOver = () => {
        if (this.props.pass.includes("O")){
            return(
            <Text style={styles.txt}>Overnight</Text>
            )
        }
        else
            return  <Text style={grey.txt}>Overnight</Text>
    }
    isGuest = () => {
        if (this.props.pass.includes("G")){
            return(
            <Text style={styles.txt}>Student Guest</Text>
            )
        }
        else
            return  <Text style={grey.txt}>Student Guest</Text>
    }

    render() {
        const lot = this.props.title;
        const occ = this.props.occ;
        const pass = this.props.pass;

        return(
            <Grid>
                <Row>
                    <Row>
                        <Col>
                            <Text style={styles.txt}>Name: {lot}</Text>
                        </Col>
                        <Col>
                        
                        </Col>
                    </Row>
                    <Row>
                        <ImageBackground style={styles.lotpic} >
                            <Text style={[styles.txt, styles.occ]}>{occ}</Text>
                        </ImageBackground>
                    </Row>
                </Row>
                <Row>
                <Row>
                <TouchableOpacity
                    style={styles.button}
                    //need this to link to westlot map
                    onPress={this.GotoMap}  
                >
                    <Text style={styles.buttonText}>Get Directions!</Text>
                </TouchableOpacity>
            </Row>
                </Row>
                <Row>
                    <Col>
                    <Text style={styles.txt}>Parking Pass Info</Text> 
                    </Col>
                </Row>
                <Row>
                    {this.isFac()}
                    </Row>
                    <Row>
                    {this.isCom()}
                    </Row>
                    <Row>
                    {this.isVis()}
                    </Row>
                    <Row>
                    {this.isOver()}
                    </Row>
                    <Row>
                    {this.isGuest()}
                    </Row>
                <Row>
                    {this.isLotFull()}
                </Row>    
            </Grid>
        );
    }
} 

export default Lot_Detail

const styles = {
    occ: {
        color:'white'        
    }

    , lotpic: {
        backgroundColor:'black'
        , width: '100%'
        , height: '100%'
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
        width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
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