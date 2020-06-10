import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
 
import Login from './Login/Login';
import Register from './Login/Register';
import Lots from './Parking/Lots';
import Lot_Detail from './Parking/Lot_Detail';
import LotMap from './Maps/LotMap';
import Events from './Parking/events'
 
export default class Routes extends Component {
    render() {
        return (
            <Router barButtonIconStyle ={styles.barButtonIconStyle}
                hideNavBar={false} 
                navigationBarStyle={styles.navbar} 
                titleStyle={{color: 'white'}}
            >
                <Stack key="root">
                    <Scene key="login" component={Login} title="Login"/>
                    <Scene key="signup" component={Register} title="Sign up"/>
                    <Scene key="home" component={Lots} title="Parking"  hideNavBar={true}/>
                    <Scene key="lot_detail" component={Lot_Detail} title="Lot Detail" hideNavBar={false}/>
                    <Scene key="map" component={LotMap} title="Lot Map" hideNavBar={false} />
                    <Scene key="events" component={Events} title="Events" hideNavBar={false} />
                </Stack>
            </Router>
        )
    }
}
 
const styles = {
    barButtonIconStyle: {
        tintColor: 'white'
    }
    , navbar: {
        backgroundColor: '#ed800c'
        , height:30
    }
}
