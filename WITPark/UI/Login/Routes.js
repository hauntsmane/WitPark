import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
<<<<<<< HEAD
 
import Login from './Login';
import Register from './Create_Account';
=======
import Login from '../Login/Login';
import Register from '../Login/Create_Account';

>>>>>>> e1badf8cb76f7ace16bfc6f33ab8a8ea99ce1ed9
 
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
