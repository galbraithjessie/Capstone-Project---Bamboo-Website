import React, { Component } from 'react';
import axios from 'axios';
import HtmlParser from 'react-html-parser';

import BlogForm from '../blogComponents/blog-form';
 
export default class BlogDetail extends Component {
    constructor(props) {
        super(props);

            this.state = {
                currentId: this.props.match.params.slug,
                blogItem: {},
                editMode: false
            };
            
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleUpdateFormSubmission = this.handleUpdateFormSubmission.bind(this);
    }

    handleUpdateFormSubmission(blog) {
        this.setState({
            blogItem: blog,
            editMode: false
        });
    }

    handleEditClick() {
        this.setState({ editMode: true }); 
    }

    getBlogItem() {
        axios.get(`https://flask-backend-capstone.herokuapp.com/blog/${this.state.currentId}`
        ).then(response => {
            this.setState({
                blogItem: response.data
            });            
        }).catch(error => {
            console.log('getBlogItem', error);    
        });
    }

    componentDidMount() {
        this.getBlogItem();
    }

   render() {
       const {
           id,
           title,
           content,
       } = this.state.blogItem;

       const contentManager = () => {
           if (this.state.editMode) {
               return <BlogForm 
               editMode={this.state.editMode} 
               blog={this.state.blogItem}
               />
           } else {
              return (
              <div id={id} className="detail-content-container">
                <h1 onClick={this.handleEditClick}>{title}</h1>

                <div className="content">{HtmlParser(content)}</div>
              </div> 
            );
           }
       };
       
       return(
          <div className="blog-detail-container">
              {contentManager()}
          </div>
       );
   }
};