import React, { Component } from 'react';
import axios from 'axios';
import { FortAwesomeIcon, FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import BlogItem from "../blogComponents/blog-item";
import BlogModal from '../modals/blog-modal';


export default class Blog extends Component {
   constructor() {
      super();

      this.state = {
         blogItems: [],
         blogModalIsOpen: false
      }

      this.getBlogItems = this.getBlogItems.bind(this);
      this.handleNewBlogClick = this.handleNewBlogClick.bind(this);
      this.handleModalClose = this.handleModalClose.bind(this);
      this.handleSuccessfulNewBlogSubmission = this.handleSuccessfulNewBlogSubmission.bind(this);
   }

   handleSuccessfulNewBlogSubmission(blog) {
      this.setState ({
         blogModalIsOpen: false,
         blogItems: blog
      });
   }

   handleModalClose() {
      this.setState({
         blogModalIsOpen: false
      });
   }

   handleNewBlogClick() {
      this.setState({
         blogModalIsOpen: true
      });
   }
  
   getBlogItems() {
      // do , {withCredentials: true} once Authentication is set up.
      axios.get("https://flask-backend-capstone.herokuapp.com/blogs")
      .then(response => {
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
            // creates an array to map over and put in descending order.
      const blogRecords = [].concat(this.state.blogItems).sort((a,b) => b.id - a.id).map(blogItem => { 
         return <BlogItem key={blogItem.id} blogItem={blogItem} /> 
      });

       return(
          <div className='blog-container'> 
            
          <BlogModal  
          handleSuccessfulNewBlogSubmission={this.handleSuccessfulNewBlogSubmission}
          handleModalClose={this.handleModalClose}
          modalIsOpen={this.state.blogModalIsOpen} />

          <div className="new-blog-link">
            <a onClick={this.handleNewBlogClick}>
                  <FontAwesomeIcon icon="plus-circle" />
            </a>
          </div>
               
               {/**top 3 blogs to visible at the top of page smaller thumbnail **/}
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
               
               {/** Blogs with infinite scrolling */}
               <div className="blog-records">
                  {blogRecords}
               </div>
          </div>
       );
   }
};
