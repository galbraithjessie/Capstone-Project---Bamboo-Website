import React, { Component } from 'react';
import ReactPlayer from 'react-player';


 
export default class TryItFree extends Component {
   render() {
       return(
          <div className='tryitfree-container'>
             <div className='tryitfree-wrapper'>
               <div className='tryitfree-video'>
               <ReactPlayer 
                  url='https://www.youtube.com/watch?v=LBDnEt5Xxn8&list=PL-CryN99mxd0_IUJkWR5Ig3nwLPeLk-zu&index=4&ab_channel=BambooHR'
                  />
               </div>

               <div className='tryitfree-form'>
                        <h1>Free Trial Account</h1>
                        <p>All you need to do is complete the form below.</p>
                        <div className='tryitfree-form__form'>
                           <form id="tryitfree-form__form" >
                              <div className="form-group">
                                 <label htmlFor="name">Name</label>
                                 <input type="text" className="form-control" />
                              </div>
                              <div className="form-group">
                                 <label htmlFor="exampleInputEmail1">Email Address</label>
                                 <input type="email" className="form-control" aria-describedby="emailHelp" />
                              </div>
                              <div className="form-group">
                                 <label htmlFor="message">Company Info</label>
                                 <textarea className="form-control" rows="8"></textarea>
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