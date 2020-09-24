import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { Security, LoginCallback } from '@okta/okta-react';

import Home from '../pages/home';
import LogIn from '../auth/login';
import Blog from '../pages/blog';
import BlogDetail from '../pages/blog-detail';
import AboutUs from '../pages/about';
import ContactUs from '../pages/contact';
import NoMatch from "../pages/no-match";
import TryItFree from '../pages/tryitfree';



export default withRouter(class AppWithRouterAccess extends Component {
  constructor(props) {
    super(props);
    this.onAuthRequired = this.onAuthRequired.bind(this);
  }

  onAuthRequired() {
    this.props.history.push('/login')
  }

  render() {

    // Note: If your app is configured to use the Implicit Flow 
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to add the below property to what is passed to <Security>
    //
    // pkce={false}

    return (
        <div>
            <Security issuer='https://dev-131285.okta.com'
                    clientId='{0oa10lk9y16ISE6SY4x7}'
                    redirectUri={window.location.origin + '/implicit/callback'}
                    onAuthRequired={this.onAuthRequired} 
                    pkce={true}
                    >
                    

                <Switch>
                <Route exact path="/" component={Home} />

                <Route path='/login' render={() => <LogIn baseUrl='https://dev-131285.okta.com' />} />
                <Route path='/tryitfree' component={TryItFree} />
                <Route path='/implicit/callback' component={LoginCallback} />

                {/* <Route path="/signup" component={SignUp} /> */}
                <Route path="/blog" component={Blog} />
                <Route path="/b/:slug" component={BlogDetail} />
                <Route path="/about" component={AboutUs} />
                <Route path="/contact" component={ContactUs} />
                

                <Route component={NoMatch} />
                </Switch>
            </Security>
        </div>
    );
  }
});