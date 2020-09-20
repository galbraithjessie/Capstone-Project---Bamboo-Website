import React, { Component } from 'react';
import ReactModal from 'react-modal';

import BlogForm from '../blogComponents/blog-form';
import { withOktaAuth } from '@okta/okta-react';

ReactModal.setAppElement(".app-wrapper");

export default withOktaAuth(class BlogModal extends Component {
    constructor(props) {
        super(props);

        this.customStyles = {
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                width: "1080px"
            },
            overlay: {
                backgroundColor: "rgba(1, 1, 1, 0.75)"
            }

        };

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
    }

    handleSuccessfulFormSubmission(blog) {
        this.props.handleSuccessfulNewBlogSubmission(blog);   
    }

   render() {
    if (this.props.authState.isPending) return null;

    const contentManager = () => {
        if (this.props.authState.isAuthenticated) {
            return (
                <ReactModal 
                    style={this.customStyles}
                    onRequestClose={() => {
                    this.props.handleModalClose();
                    }} isOpen={this.props.modalIsOpen}
                    >

                    <BlogForm handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission} />
                </ReactModal>
            );
        } else {
            return null;
        }
     };

       return( 
            <div>
                {contentManager()}  
            </div>        
       );
   }
});