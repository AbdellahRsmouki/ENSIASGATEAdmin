import './App.css';

import {Route, Switch} from 'react-router-dom';
import React, { Component } from 'react'
import Dashboard from './pages/Dashboard';
import AuthenPage from './pages/AuthenPage';
import UpdateProfile from './pages/UpdateProfile';
import {UserContext} from './UserContext';
import ErrorPage from './pages/ErrorPage';

export default class App extends Component {

    constructor(props){
        super(props)
        this.state = {loggedIn:false}
    }
  
    render(){
        if(this.state.loggedIn){
            return(
              <Switch>
                    <Route path='/auth' component={AuthenPage} />
              </Switch>
            )
          }
        else{
            return ( 
                <>
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route exact path='/update-profile' component={UpdateProfile} />
                    <Route component={ErrorPage} />
                </Switch>
                </>
                );
        }
    }
}