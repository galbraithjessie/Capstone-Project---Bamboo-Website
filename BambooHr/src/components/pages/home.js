import React, { Component } from 'react';
import { withOktaAuth } from '@okta/okta-react';

import YouTube from '@u-wave/react-youtube';

export default withOktaAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async login() {
    this.props.authService.login('/');
  }

  async logout() {
    this.props.authService.logout('/');
  }

  render() {
    if (this.props.authState.isPending) return null;

    const button = this.props.authState.isAuthenticated ?
      <button onClick={this.logout}>Logout</button> :
      <button onClick={this.login}>Login</button>;

    return (
      <div>
        <div className='home-container'>
          <div className='home-title'>Our Software</div>
          <YouTube className='home-video'
            video="7WraxuTDqk0"
            autoplay
            height='460'
            width='840'
          />

          <div className='home-form'>
            <button className='btn'>Get A Free Quote</button>
          </div>
        </div>
      </div>
    );
  }
});