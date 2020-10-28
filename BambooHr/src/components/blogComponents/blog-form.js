import React, { Component } from 'react';
import axios from 'axios';

import RichTextEditor from '../forms/rich-text-editor';

export default class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            title: "",
            content: "",
            editMode: false,
            apiUrl: "https://flask-backend-capstone.herokuapp.com/blog",
            apiAction: "post"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRichTextEditorChange = this.handleRichTextEditorChange.bind(this);
    }

    componentWillMount() {
        if (this.props.editMode) {
            this.setState({
                id: this.props.blog.id,
                title: this.props.blog.title,
                content: this.props.blog.content,
                apiUrl: `https://flask-backend-capstone.herokuapp.com/blog/${this.props.blog.id}`,
                apiAction: "PUT"  
            });
        }
    }

    handleRichTextEditorChange(content) {
        this.setState({ content });
    }

    handleSubmit(event) {
                    // add auth as a third argument on this after buildForm do withCredentials: true
        axios({
            method: this.state.apiAction,
            url: this.state.apiUrl, 
            data: {title: this.state.title, content: this.state.content}  
            }).then(response => {
                this.setState({
                    title: "",
                    content: ""
                });

                if (this.props.editMode) {
                    this.props.handleUpdateFormSubmission(response.data);
                } else {
                this.props.handleSuccessfullFormSubmission(response.data);
                }

            }).catch(error => {
                console.log('handleSubmit for Blog error', error);
            });

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
                  editMode={this.props.editMode}
                  contentToEdit={this.props.editMode && this.props.blog.content 
                    ? this.props.blog.content
                    : null
                  }  
                 />
               </div>


              <button className="btn-modal">Save</button>
          </form>
       );
   }
}