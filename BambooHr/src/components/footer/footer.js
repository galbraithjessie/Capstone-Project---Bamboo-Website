import React, { Component } from 'react';
 
export default class FooterContainer extends Component {
   render() {
       return(
          <div className='footer-container'>
              <div className='footer-wrapper'>
                    <div className='footer-top'>
                        <div className='footer-company'>
                            <h1>Company</h1>
                            <div className='footer-company__left'>
                                <a>About Us</a>
                                <a>Careers</a>
                                <a>Why BambooHR</a>
                                <a>Blog</a>
                                <a>Contact Us</a>
                            </div>
                            <div className='footer-company__right'>
                                <a>Customers</a>
                                <a>Events Calander</a>
                                <a>HR Glossary</a>
                                <a>Small Business</a>
                                <a>HRIS</a>
                            </div>
                        </div>

                        <div className='footer-support'>
                            <h1>Support</h1>
                            <div className='footer-support__left'>
                                <a>Resources</a>
                                <a>Webinars</a>
                                <a>Services</a>
                                <a>FAQ</a>
                                <a>Partner with Us</a>
                                <a>API</a>
                            </div>
                            <div className='footer-support__right'>
                                <a>App Marketplace</a>
                                <a>Login</a>
                            </div>

                        </div>

                        <div className='footer-subscribe'>
                            <h1>Subscribe to our Newsletter</h1>
                        </div>
                    </div>

                    <div className='footer-bottom'>
                        <div className='footer-bottom__left'> 
                            <div className='footer-bottom__social'>

                            </div>
                        </div>
                        <div className='footer-bottom__right'> 
                            <div className="footer-bottom__copy-right">
                            © 2020 My Content LLC. All Rights Reserved. My Content® is a registered trademark of My Content LLC
                            </div>
                        </div>
                    </div>

                    <div className='footer-opt-out'>Some content</div>

                </div>
          </div>
       );
   }
}