import React, { Component } from 'react';

export default class Blog extends Component {
   constructor() {
      super();
   };

   

   render() {
       return(
          <div className='blog-container'> 
               <div className="blog-searchbar">
                  <input placeholder="Search Blogs"></input>
               </div>
               {/**top 3 blogs to visible at the top of page smaller thumbnail with partial description**/}
               <div className='blog-top-blogs'>
                     <div className='blog-top-blog'>                       
                        <img className='blog-thumbnail' src='http://via.placeholder.com/180x180'/>
                        <h1>How to do a Virtual Interview</h1>
                     </div>
                     <div className='blog-top-blog'>                        
                        <img className='blog-thumbnail' src='http://via.placeholder.com/180x180'/>
                        <h1>Virtual training or no training?</h1>
                     </div>
                     <div className='blog-top-blog'>                        
                        <img className='blog-thumbnail' src='http://via.placeholder.com/180x180'/> 
                        <h1>Best ways to deal with Layoff due to Covid-19</h1>
                     </div>
               </div>
               
               <div>Blogs with infinite scrolling</div>
          </div>
       );
   }
}