import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
                        <h1>Address</h1>
                        <p>335 South 560 West</p>
                        <p>Lindon, UT 84042-1911</p>
                        <p>USA</p>
                     </div>
                     <div className='contact__phone'>
                        <h1>Office Number</h1>
                        <p>Toll Free: 1-866-387-9595</p>
                        <p>Phone: 801-724-6600</p>
                     </div>
                     <div className='contact__hours'>
                        <h1>Office Hours</h1>
                        <p>Mon-Fri, 8am-5pm(MST)</p>
                        {/* <p>It's ___ am on ___ in Lindon</p> needs to say current time and day  */}
                     </div>
                     <div className='contact__social'>
                        <h1>Social</h1>
                        {/*Facebook, Twitter, Insta, Linkedin, and YouTube Icons*/}
                     </div>
                  </div>
                  <div className='contact__map'>
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
                  <div className="contact__form">

                  </div>
               </div>
            </div>
       );
   }
}