import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from './navigation/navigation-container';
import FooterContainer from './footer/footer';
import Home from './pages/home';
import Packaging from './pages/packaging';
import NoMatch from "./pages/no-match";

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
              <NavigationContainer
              />

              <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/packages" component={Packaging} />

                <Route component={NoMatch} />
              </Switch>
              <FooterContainer />
            </div>
        </Router>
      </div>
    );
  }
}
