import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';


import bambooLogo from '../../../static/assets/images/navLogo.jpg';

const NavigationContainer = props => {
    
    return (
      <div className='nav-wrapper'>
          <div className='left-nav'>
            <NavLink exact to='/' className='nav-logo' style={{
                backgroundImage: `url(${bambooLogo})`
            }} /> 
            
              <div className='nav__menu-item'>
                <a>Our Software</a>
                </div>
              <div className='nav__menu-item'>
                <a>Why BambooHR</a>
                </div>
              <div className='nav__menu-item'>
                <a>Blog</a>
                </div>
              <div className='nav__menu-item'>
                <a>Contact</a>
              </div>
            
          </div>
          <div className='right-nav'>
            <button className='btn login'>Log In</button>
            <button className='btn try'>Try it Free</button>
          </div>
      </div>
    );
   
}

export default withRouter(NavigationContainer);