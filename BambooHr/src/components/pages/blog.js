import React, { Component } from 'react';

export default class Blog extends Component {
   constructor() {
      super();
         var wordpress = require( "wordpress" );
         var client = wordpress.createClient({
            url: "myreactcapstoneproject.wordpress.com",
            username: "myreactcapstoneproject",
            password: "WordPressLogInCode84651"
         });

          

         client.getPosts(function( error, data ) {
            console.log( arguments );
         });
   }

   

   render() {
       return(
          <div className='blog-container'>
              
          </div>
       );
   }
}