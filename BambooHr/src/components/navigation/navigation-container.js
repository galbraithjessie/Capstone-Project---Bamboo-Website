import React, { Component } from 'react';

import bambooLogo from '../../../static/assets/images/navLogo.jpg';
 
export default class NavigationContainer extends Component {
   render() {
       return(
          <div className='nav-wrapper'>
              <div className='left-nav'>
                <div className='nav-logo' style={{
                    backgroundImage: `url(${bambooLogo})`
                }} /> 
                
                <div>Our Software</div>
                <div>Why BambooHR</div>
                <div>Resources</div>
                <div>About BambooHR</div>
              </div>
              <div className='right-nav'>
                <div>Log In</div>
                <div>Try it Free</div>
              </div>
          </div>
       );
   }
}