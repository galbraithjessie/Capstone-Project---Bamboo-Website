import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{ text }</div>;
 
export default class ContactUs extends Component {
   static defaultProps = {
      center: { lat: 40.332833, lng: -111.728768 },
      zoom: 14
    }

   render() {
       return(
          <div className='contact-container'>
             <div>
             <div className='contact__phone'>

             </div>
             <div className='contact__map'>
               <GoogleMapReact
               defaultCenter={ this.props.center }
               defaultZoom={ this.props.zoom }>
               
                  <AnyReactComponent
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