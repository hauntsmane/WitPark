import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
<<<<<<< HEAD
 
import Login from './Login/Login';
import Register from './Login/Create_Account';
=======
import React, { Component } from 'react';
import Login from '../Login/Login';
import Register from '../Login/Create_Account';
>>>>>>> df0c81904547f466bf035510f5f4cdb984277de4
 
export default class Routes extends Component {
    render() {
        return (
            <Router barButtonIconStyle ={styles.barButtonIconStyle}
                hideNavBar={false} 
                navigationBarStyle={{backgroundColor: '#1565c0',}} 
                titleStyle={{color: 'white',}}
            >
                <Stack key="root">
                    <Scene key="login" component={Login} title="Login"/>
                    <Scene key="signup" component={Register} title="Sign up"/>
                </Stack>
            </Router>
        )
    }
}
 
const styles = {
    barButtonIconStyle: {
        tintColor: 'white'
    }
}
