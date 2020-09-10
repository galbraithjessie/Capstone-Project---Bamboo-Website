import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import NavigationContainer from './navigation/navigation-container';
import FooterContainer from './footer/footer';
import Home from './pages/home';
import LogIn from './pages/logIn';
import Packaging from './pages/packaging';
import Blog from './pages/blog';
import BlogDetail from './pages/blog-detail';
import AboutUs from './pages/about';
import ContactUs from './pages/contact';
import SignUp from './pages/signUp';
import NoMatch from "./pages/no-match";
import Icons from "../helpers/icons";

import ChatWidget from './widgets/chatWidget';

export default class App extends Component {
  constructor(props) {
    super(props);


    Icons();
  }
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
              <NavigationContainer />
              <ChatWidget />

              <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/packages" component={Packaging} />
                <Route exact path="/lognin" component={LogIn} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/b/:slug" component={BlogDetail} />
                <Route exact path="/about" component={AboutUs} />
                <Route exact path="/contact" component={ContactUs} />
                

                <Route component={NoMatch} />
              </Switch>
              <FooterContainer />
            </div>
        </Router>
      </div>
    );
  }
}
