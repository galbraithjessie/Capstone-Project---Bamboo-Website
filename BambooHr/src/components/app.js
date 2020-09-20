import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';

import NavigationContainer from './navigation/navigation-container';
import FooterContainer from './footer/footer';
import AppWithRouterAccess from './auth/AppWithRouterAccess'
import Icons from "../helpers/icons";

import ChatWidget from './widgets/chatWidget';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.onAuthRequired = this.onAuthRequired.bind(this);

    Icons();
  } 

  onAuthRequired({history}) {
    history.push('/login')
  }

  render() {
    return (
      <div className='container'>
        <Router>
          <div>
          <NavigationContainer />
            <ChatWidget />
            <AppWithRouterAccess />
            <FooterContainer />
          </div>
        </Router>
      </div>
    );
  }
}
