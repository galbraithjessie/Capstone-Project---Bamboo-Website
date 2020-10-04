import React, { Component, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';


import bambooLogo from '../../../static/assets/images/navLogo.jpg';

class NavigationContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            showMenu: false
        };

        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
  
    }


    openMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
          });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
      }

    render() {
        return (
            <div>
                    <div className='nav-dropdown'> 
                        <i onClick={this.openMenu} id='nav-icon'><FontAwesomeIcon className='nav-icon'  icon='bars' /></i>
                                { this.state.showMenu ? (
                                <div className='nav-dropdown-content'>
                                    <NavLink className='nav-dropdown-item' exact to='/software'>Our Software</NavLink>
                                    <NavLink className='nav-dropdown-item' exact to='/about'>Why BambooHR</NavLink>  
                                    <NavLink className='nav-dropdown-item' exact to='/blog'>Blog</NavLink>
                                    <NavLink className='nav-dropdown-item' exact to='contact'>Contact</NavLink>
                                </div>
                                ) : null
                              }       
                    </div>
                          
                    <div className='nav-wrapper'>
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
        
            </div>
            );
        }
}

export default withRouter(NavigationContainer);