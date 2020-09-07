import React, { Component } from 'react';
 
export default class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
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

              {/* <input
              type="text" 
              onChange={this.handleChange} 
              name="content"
              placeholder="Blog Title"
              value={this.state.title}
               /> */}

             

              <button>Save</button>
          </form>
       );
   }
}