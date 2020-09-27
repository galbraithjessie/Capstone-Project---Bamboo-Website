import React, { Component } from 'react'

export default class LogIn extends Component {
  render() {
    return (
      <div className="login-container">
        <div  className='login-img'>
            
        </div>
        <div  className='login-form'>
          <form id="login-form__form" >
            <div className="login-form">
              <label htmlFor="name">User Name</label>
              <input type="text" className="form-name" />
            </div>
            <div className="login-form">
              <label htmlFor="Password">Password</label>
              <input type="password" className="form-password" />
            </div>
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
        
      </div>
    )
  }
}
