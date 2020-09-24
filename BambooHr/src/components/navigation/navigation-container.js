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
              
              <NavLink className='nav__menu-item' exact to='/blog'>Blog</NavLink>
              
            
              <NavLink className='nav__menu-item' exact to='contact'>Contact</NavLink>
              
            
          </div>
          <div className='right-nav'>

            <NavLink className='btn login' exact to='login'>Log In</NavLink>

            <NavLink className='btn try' exact to='tryitfree'>Try it Free</NavLink>
          </div>
      </div>
    );
   
}

export default withRouter(NavigationContainer);