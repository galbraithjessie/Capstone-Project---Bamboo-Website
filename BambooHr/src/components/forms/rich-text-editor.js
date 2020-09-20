import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { withOktaAuth } from '@okta/okta-react';
 
export default withOktaAuth(class RichTextEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editorState: EditorState.createEmpty()
        };

        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }

    componentWillMount() {
        if (this.props.editMode && this.props.contentToEdit) {
            const blocksFromHtml = htmlToDraft(this.props.contentToEdit);
            const { contentBlocks, entityMap } = blocksFromHtml;
            const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
            const editorState = EditorState.createWithContent(contentState);
            this.setState({ editorState });
        }
    }

    onEditorStateChange(editorState) {
        this.setState(
            { editorState }, 
            this.props.handleRichTextEditorChange(
                draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
            )
        );
        
    }


   render() {
        const textEditorManager = () => {
            if (this.props.authState.isAuthenticated) {
                return (
                    <Editor
                editorState={this.state.editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
                toolbar={{
                    inline: { inDropdown: true},
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true},
                    link: { inDropdown: true },
                    history: { inDropdown: true }
                }}
               />
                )
            } else {
                return null;
            }
        }

       return(
          <div>
              {textEditorManager()}
          </div>
       );
   }
});