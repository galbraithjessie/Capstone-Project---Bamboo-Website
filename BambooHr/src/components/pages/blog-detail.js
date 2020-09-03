import React, { Component } from 'react';
import axios from 'axios';
 
export default class BlogDetail extends Component {
    constructor(props) {
        super(props);

            this.state = {
                currentId: this.props.match.params.slug,
                blogItem: {}
            };
            
    }

    getBlogItem() {
        axios.get(`https://flask-backend-capstone.herokuapp.com/blog/${this.state.currentId}`
        ).then(response => {
            this.setState({
                blogItem: response.data
            })    
        }).catch(error => {
            console.log('getBlogItem', error);
            
        });
    }

    componentDidMount() {
        this.getBlogItem();
    }

   render() {
       const {
           title,
           content
       } = this.state.blogItem;
       return(
          <div className="blog-detail-container">
              <div className="detail-content-container">
                <h1>{title}</h1>
                <div className="content">{content}</div>
              </div>
          </div>
       );
   }
}