import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
  
export default class ChatWidget extends Component {
    constructor() {
        super();
    }

    handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        // New message would be sent through the API to support staff
        addResponseMessage(response);
    }
    
    componentDidMount() {
        //initial message
        addResponseMessage("How can we help you?");
    }

   render() {
       return(
          <div className='chat-container'>
              <Widget
              title='Do you have any questions?'
              subtitle= 'We typically reply within a few minutes'
              handleNewUserMessage={this.handleNewUserMessage}
              />
          </div>
       );
   }
}