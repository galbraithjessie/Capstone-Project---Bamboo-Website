import React, { Component } from 'react';
 
export default class FooterContainer extends Component {
   render() {
       return(
        <div className='footer'>
          <div className='footer-container'>
              <div className='footer-wrapper-top'>
                    <div className='footer-left'>
                            <h1>Company</h1>
                            <div className='footer-left-links'>
                                <div className='footer-left-links__left'>
                                    <a className='footer-link'>About Us</a>
                                    <a className='footer-link'>Careers</a>
                                    <a className='footer-link'>Why BambooHR</a>
                                    <a className='footer-link'>Blog</a>
                                    <a className='footer-link'>Contact Us</a>
                                </div>
                                <div className='footer-left-links__right'>
                                    <a className='footer-link'>Customers</a>
                                    <a className='footer-link'>Events Calander</a>
                                    <a className='footer-link'>HR Glossary</a>
                                    <a className='footer-link'>Small Business</a>
                                    <a className='footer-link'>HRIS</a>
                                </div>
                            </div>
                    </div>

                    <div className='footer-middle'>
                        <h1>Support</h1>
                        <div className='footer-middle-links'>
                            <div className='footer-middle-links__left'>
                                <a className='footer-link'>Resources</a>
                                <a className='footer-link'>Webinars</a>
                                <a className='footer-link'>Services</a>
                                <a className='footer-link'>FAQ</a>
                                <a className='footer-link'>Partner with Us</a>
                                <a className='footer-link'>API</a>
                            </div>

                            <div className='footer-middle-links__right'>
                                <a className='footer-link'>App Marketplace</a>
                                <a className='footer-link'>Login</a>
                            </div>
                        </div>
                    </div>

                    <div className='footer-right'>
                        <div className='footer-subscribe'>
                            <h1>Subscribe to our Newsletter</h1>
                            <form>
                                <input type='text' placeholder='  email'></input>
                                <button>Submit</button>
                            </form>
                            
                        </div>

                         

                        
                    </div>

                </div>
                <div className='footer-wrapper-middle'>
                    <div className="footer-wrapper-middle__copy-right">
                        © 2020 My Content LLC. All Rights Reserved. My Content® is a registered trademark of My Content LLC
                    </div>
                </div>
                <div className='footer-wrapper-bottom'>

                </div>
          </div>
        </div>
       );
   }
}