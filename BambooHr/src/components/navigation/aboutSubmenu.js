import React, { Component } from 'react';
 
export default class AboutSubmenu extends Component {
   render() {
       return(
          <div>
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
          </div>
       );
   }
}