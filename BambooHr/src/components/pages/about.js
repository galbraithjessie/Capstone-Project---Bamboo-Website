import React, { Component } from 'react';
import ReactPlayer from 'react-player';

 
export default class AboutUs extends Component {
   render() {
       return(
          <div className='about-container'>
             <div className='about-wrapper'>
               <div  className='about-player'>
                  <ReactPlayer 
                  url='https://www.youtube.com/watch?v=pqYQwyxfx44&ab_channel=BambooHR'
                  /> 
               </div>

              
               <div className='about-content'>
                  <h1>Guide to Company Culture</h1>
                  <p>
                  BambooHR believes that a vibrant company culture which supports and nurtures <br></br> 
                  their employees is so important that it is the key to their success—and a unique <br></br> 
                  and sustainable competitive advantage. BambooHR CEO and cofounder Ben Peterson says,<br></br> 
                  “If you create a great place to work, great work takes place.”
                  </p>
                  <p>
                  In this guide you'll learn: <br></br>
                  What company culture is <br></br>
                  How company culture can help your business achieve its goals <br></br>
                  And steps on how to build the culture in your company <br></br>
                  </p>
                  <p>
                  BambooHR provides the #1 HR experience for small and medium businesses. <br></br> 
                  From HR software to performance to employee onboarding to payroll, <br></br> 
                  BambooHR exists to set you free to do great work.
                  </p>
               </div>
             </div>
          </div>
       );
   }
}