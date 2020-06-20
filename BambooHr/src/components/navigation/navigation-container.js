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
            
            <div className='nav__menu-item'>Our Software</div>
            <div className='nav__menu-item'>Why BambooHR</div>
            <div className='nav__menu-item'>Resources</div>
            <div className='nav__menu-item'>
              <a>About BambooHR</a>
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