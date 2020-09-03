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
            console.log('response', response);
            
        }).catch(error => {
            console.log('getBlogItem', error);
            
        });
    }

    componentDidMount() {
        this.getBlogItem();
    }

   render() {
       console.log('current id', this.state.currentId);
       
       return(
          <div>
              <h1>Blog Detail Page</h1>
          </div>
       );
   }
}