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
                <a>Resources</a>
                </div>
              <div className='nav__menu-item'>
                <a>About BambooHR
                  <ul className="about__submenu">
                    <li className='about__submenu-item'>
                        <a>Our Story</a>
                    </li>
                    <li className='about__submenu-item'>
                        <a>Contact</a>
                    </li>
                    <li className='about__submenu-item'>
                        <a>Careers</a>
                    </li>
                  </ul>
                </a>
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