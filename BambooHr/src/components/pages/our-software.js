import React, { Component } from 'react';

import ReactPlayer from 'react-player';

 
export default class OurSoftware extends Component {
   render() {
       return(
          <div className='software-container'>
             <div className='software-wrapper'>
               <div  className='software-player'>
                  <ReactPlayer 
                  url='https://www.youtube.com/watch?v=73ajvQFrU20&ab_channel=BambooHR'
                  /> 
               </div>

              
               <div className='software-content'>

                   <p>
                   BambooHR is an all-in-one HR software that exists to set you free to do great work. <br></br>
                   In this introductory video, you’ll learn about the main features of the platform, <br></br>
                   including BambooHR Homepage, Performance Management, Time Tracking, PTO, Applicant Tracking, <br></br>
                   Electronic Signatures, Employee Satisfaction with eNPS, Reporting & Analytics, and more. <br></br>
                   </p>
               
               </div>
             </div>
          </div>
       );
   }
}