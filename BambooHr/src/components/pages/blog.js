import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
//import BlogPost from '../blogComponents/blog-item';

class Blog extends Component {
   constructor() {
      super();

      this.state = {
         blogItems: []
      }

      this.getBlogItems = this.getBlogItems.bind(this);
   }

   getBlogItems() {
      // do , {withCredentials: true} once Authentication is set up.
      axios.get("https://flask-backend-capstone.herokuapp.com/blogs").then(response => {
         this.setState({
            blogItems: response.data
         })
      }).catch(error => {
         console.log('getBlotItems', error);
      })
   }

   componentWillMount() {
      this.getBlogItems();
   }

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

export default Blog;