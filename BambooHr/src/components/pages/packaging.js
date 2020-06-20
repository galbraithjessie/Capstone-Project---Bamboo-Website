import React, { Component } from 'react';
 
export default class Packaging extends Component {
   render() {
       return(
           //2 packages
           //Essential and Advantage
           //Add-on services next to it.
          <div className='packages-container'>
              <div className="packages__heading">
                <h1>Packaging</h1>
                <h2>Wherever you are in your journey, BambooHR® has a package that’s right for you.</h2>
                <p>Choosing your HR software platform just got a whole lot easier. Our specially designed packages give you the right tools to reach your goal, whether that’s eliminating spreadsheets or becoming a strategic force in your company.</p>
                <button>Get a Free Quote</button>
              </div>
              <div className='packages'>
                Features Comparison
              </div>
              <div className='packages__addons'>
                  addons
              </div>
          </div>
       );
   }
}