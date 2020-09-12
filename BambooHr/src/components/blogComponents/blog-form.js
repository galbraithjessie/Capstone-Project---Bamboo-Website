import React, { Component } from 'react';
import axios from 'axios';

import RichTextEditor from '../forms/rich-text-editor';

export default class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRichTextEditorChange = this.handleRichTextEditorChange.bind(this);
    }

    handleRichTextEditorChange(content) {
        this.setState({ content });
    }

    handleSubmit(event) {
                    // add auth as a third argument on this after buildForm do withCredentials: true
        axios.post(
            "https://flask-backend-capstone.herokuapp.com/blog", 
            {title: this.state.title, content: this.state.content}
            ).then(response => {
                this.props.handleSuccessfulFormSubmission(response.data)

                this.setState({
                    title: "",
                    content: ""
                });
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
          <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
              <input
              type="text" 
              onChange={this.handleChange} 
              name="title"
              placeholder="Blog Title"
              value={this.state.title}
               />

<              div className="one-column">
                 <RichTextEditor 
                  handleRichTextEditorChange={this.handleRichTextEditorChange}
                 />
               </div>


              <button className="btn-modal">Save</button>
          </form>
       );
   }
}