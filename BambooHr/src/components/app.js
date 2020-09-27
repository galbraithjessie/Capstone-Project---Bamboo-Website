import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/home';
import LogIn from './auth/login';
import Blog from './pages/blog';
import BlogDetail from './pages/blog-detail';
import AboutUs from './pages/about';
import ContactUs from './pages/contact';
import NoMatch from "./pages/no-match";
import OurSoftware from './pages/our-software';
import TryItFree from './pages/tryitfree';
import NavigationContainer from './navigation/navigation-container';
import FooterContainer from './footer/footer';
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
          <Switch>
                <Route exact path="/" component={Home} />

                <Route path='/login' component={LogIn}/>
                <Route path='/tryitfree' component={TryItFree} /> 
                <Route path="/software" component={OurSoftware} />
                <Route path="/blog" component={Blog} />
                <Route path="/b/:slug" component={BlogDetail} />
                <Route path="/about" component={AboutUs} />
                <Route path="/contact" component={ContactUs} />
                

                <Route component={NoMatch} />
                </Switch>

            
            <ChatWidget />
            <FooterContainer />
          </div>
        </Router>
      </div>
    );
  }
}
