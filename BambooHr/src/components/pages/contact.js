import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


const GoogleMapComponent = ({ text }) => <div>{ text }</div>;
 
export default class ContactUs extends Component {
   static defaultProps = {
      center: { lat: 40.332833, lng: -111.728768 },
      zoom: 14
    }

   render() {
       return(
          <div className='contact-container'>
             <div className='contact-wrapper'>
                  <div className='contact__info'>
                     <div className='contact__address'>
                        <FontAwesomeIcon className='contact__info__icon' icon='map-marker-alt' />
                        <h1>Address</h1>
                        <p>335 South 560 West<br></br> 
                           Lindon, UT 84042-1911<br></br>
                           USA
                        </p>
                     </div>
                     <div className='contact__phone'>
                        <FontAwesomeIcon className='contact__info__icon' icon='phone-alt' />
                        <h1>Office Number</h1>
                        <p>Toll Free: 1-866-387-9595<br></br>
                           Phone: 801-724-6600
                        </p>
                     </div>
                     <div className='contact__hours'>
                        <FontAwesomeIcon className='contact__info__icon' icon='clock' />
                        <h1>Office Hours</h1>
                        <p>Mon-Fri, 8am-5pm(MST)</p>
                        {/* <p>It's ___ am on ___ in Lindon</p> needs to say current time and day  */}
                     </div>
                     <div className='contact__social'>
                        <FontAwesomeIcon className='contact__info__icon' icon='comment-alt' />
                        <h1>Social</h1>
                        
                        <a href="https://www.facebook.com/bamboohr" 
                        target="_blank" 
                        rel="noopener noreferrer" >
                           <FontAwesomeIcon className='social__icon' icon={faFacebookF}/>
                        </a>                        
                        
                        <a href="https://twitter.com/bamboohr" 
                        target="_blank" 
                        rel="noopener noreferrer" >
                           <FontAwesomeIcon className='social__icon' icon={faTwitter}/></a>
                        
                        <a href="https://www.instagram.com/bamboohr/" 
                        target="_blank" 
                        rel="noopener noreferrer" >
                           <FontAwesomeIcon className='social__icon' icon={faInstagram}/>
                        </a>

                        <a href="https://www.linkedin.com/company/bamboohr/" 
                        target="_blank" 
                        rel="noopener noreferrer" >
                        <FontAwesomeIcon className='social__icon' icon={faLinkedin}/>
                        </a>

                        <a href="https://www.youtube.com/user/bamboohr" 
                        target="_blank" 
                        rel="noopener noreferrer" >
                           <FontAwesomeIcon className='social__icon' icon={faYoutube}/>
                        </a>                   
                     </div>
                  </div>

                  <div className='contact-form'>
                     <div className='contact-form__map'>
                        <GoogleMapReact
                        defaultCenter={ this.props.center }
                        defaultZoom={ this.props.zoom }>
                        
                           <GoogleMapComponent
                           lat={ 40.332833 }
                           lng={ -111.728768 }
                           text={ "BambooHr"}
                           />
                        </GoogleMapReact>
                     </div>
                     <div className="contact-form__form">
                        <h1>Email Us</h1>
                        <p>All you need to do is complete the form below.</p>
                        <form id="contact-form" >
                           <div className="form-group">
                              <label htmlFor="name">Name</label>
                              <input type="text" className="form-control" />
                           </div>
                           <div className="form-group">
                              <label htmlFor="exampleInputEmail1">Email Address</label>
                              <input type="email" className="form-control" aria-describedby="emailHelp" />
                           </div>
                           <div className="form-group">
                              <label htmlFor="message">Message</label>
                              <textarea className="form-control" rows="12"></textarea>
                           </div>
                           <button type="submit" className="btn">Submit</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
       );
   }
}