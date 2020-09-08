import React, { Component } from 'react';
import axios from 'axios';
 
export default class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        
                    // add auth as a third argument on this after buildForm do withCredentials: true
        axios.post(
            "https://flask-backend-capstone.herokuapp.com/blog", 
            {title: this.state.title, content: this.state.content}
            ).then(response => {
                this.props.handleSuccessfulFormSubmission(response.data)
            }).catch(error => {
                console.log('handleSubmit for Blog error', error);
            });


        this.props.handleSuccessfulFormSubmission(this.state)
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
   render() {
       return(
          <form onSubmit={this.handleSubmit}>
              <input
              type="text" 
              onChange={this.handleChange} 
              name="title"
              placeholder="Blog Title"
              value={this.state.title}
               />

              <input
              type="text" 
              onChange={this.handleChange} 
              name="content"
              placeholder="Blog Content"
              value={this.state.content}
               />

             

              <button>Save</button>
          </form>
       );
   }
}