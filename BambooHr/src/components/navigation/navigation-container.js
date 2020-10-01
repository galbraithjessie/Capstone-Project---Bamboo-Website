import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';


import bambooLogo from '../../../static/assets/images/navLogo.jpg';

const NavigationContainer = props => {
    
    return (
      <div className='nav-wrapper'>
          <i className=""><FontAwesomeIcon className='nav-icon' icon='bars' /></i>
          <div className='left-nav'>
            <NavLink exact to='/' className='nav-logo' style={{
                backgroundImage: `url(${bambooLogo})`
            }} /> 
            
              <NavLink className='nav__menu-item' exact to='/software'>Our Software</NavLink>
              <NavLink className='nav__menu-item' exact to='/about'>Why BambooHR</NavLink>  
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