import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Grid, Col, Row } from 'react-native-easy-grid'
import {BarChart} from 'react-native-chart-kit'

//parking occupancy data
const lotData = require('../../data/lots.json');
// const screenWidth = Dimensions.get("window").width;

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };

export default class Pred_Occ extends Component {
    constructor(props) {
        super(props);
        const days = {0:'Sun', 1:'Mon', 2:'Tues', 3:'Wed', 4:'Thurs', 5:'Fri', 6:'Sat'}
        let date = new Date();
        let time = date.getHours()*100 + Math.ceil(date.getMinutes()/5)*5;
        let day = days[date.getDay()];

        

        this.state = {
          lotName: this.props.lotName
        };  
    
      }

      getPred = () => {
        return ([20, 45, 28, 80, 99, 43]);
      };

      render() {
        return(
            <Grid>
                <Row>
                    <Text>Predicted Occupancy</Text>
                </Row>
                <Row>
                    <BarChart 
                        data={{
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [
                            {
                                data: [20, 45, 28, 80, 99, 43]
                            }
                            ]
                        }} //this.getPred
                        width={200}
                        height={220}
                        chartConfig={chartConfig}
                    />
                </Row>
            </Grid>
        );
    }
}