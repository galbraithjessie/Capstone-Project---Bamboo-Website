import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Security, ImplicitCallback, SecureRoute } from '@okta/okta-react';

import NavigationContainer from './navigation/navigation-container';
import FooterContainer from './footer/footer';
import Home from './pages/home';
import LogIn from './auth/login';
import Packaging from './pages/packaging';
import Blog from './pages/blog';
import BlogDetail from './pages/blog-detail';
import AboutUs from './pages/about';
import ContactUs from './pages/contact';
import SignUp from './pages/signUp';
import NoMatch from "./pages/no-match";
import Icons from "../helpers/icons";

import ChatWidget from './widgets/chatWidget';

function onAuthRequired({history}) {
  history.push('/login')
}

export default class App extends Component {
  constructor(props) {
    super(props);


    Icons();
  }
  render() {
    return (
      <div className='container'>
        <Router>
          <Security issuer='https://dev-131285.okta.com'
                  clientId='{0oa10ecyisu2QdW2t4x7}'
                  redirectUri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={this.onAuthRequired} >
          <div>
              <NavigationContainer />
                <ChatWidget />

                <Switch>
                  <Route exact path="/" component={Home} />

                  <Route exact path="/packages" component={Packaging} />
                  <Route path='/login' render={() => <LogIn baseUrl='https://dev-131285.okta.com' />} />
                  <Route path='/implicit/callback' component={ImplicitCallback} />

                  <Route exact path="/signup" component={SignUp} />
                  <Route exact path="/blog" component={Blog} />
                  <Route exact path="/b/:slug" component={BlogDetail} />
                  <Route exact path="/about" component={AboutUs} />
                  <Route exact path="/contact" component={ContactUs} />
                  

                  <Route component={NoMatch} />
                </Switch>
                <FooterContainer />
              </div>
            </Security>
        </Router>
      </div>
    );
  }
}
