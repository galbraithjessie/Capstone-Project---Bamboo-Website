import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


const GoogleMapComponent = ({ text }) => <div>{ text }</div>;

//Office Hours div for current time and day MST
const options = {
   hour:  "2-digit",
   minute: "2-digit",
   timeZone: 'America/Denver'
}
const option = {
   weekday: 'long'
}

export default class ContactUs extends Component {
   static defaultProps = {
      center: { lat: 40.332833, lng: -111.728768 },
      zoom: 14
    }

    
    state = {
       currentTime: new Date().toLocaleTimeString('en-US', options).toLocaleLowerCase(),
       currentDate: new Date().toLocaleDateString('en-US', option)
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
                        <p>Mon-Fri, 8am-5pm(MST)<br></br>
                           It's {this.state.currentTime} on {this.state.currentDate} in Lindon
                        </p>
                        {/* <p>It's ___ am on ___ in Lindon</p> needs to say current time and day  */}
                     </div>
                     <div className='contact__social'>
                        <FontAwesomeIcon className='contact__info__icon' icon='comment-alt' />
                        <h1>Social</h1>                        
                        <FontAwesomeIcon className='social__icon' icon={faFacebookF}/>
                        <FontAwesomeIcon className='social__icon' icon={faTwitter}/>
                        <FontAwesomeIcon className='social__icon' icon={faInstagram}/>
                        <FontAwesomeIcon className='social__icon' icon={faLinkedin}/>
                        <FontAwesomeIcon className='social__icon' icon={faYoutube}/>                      
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
                        <form className='contact-form__form'>
                           <input placeholder="First Name" type='name' />
                           <input placeholder="Last Name" type='name' />
                           <input placeholder="Email Address" type='email' />
                           <input placeholder="Phone Number" type='phone' />
                           <input placeholder="Message" type='message' />
                           <button type="submit">Submit</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
       );
   }
}