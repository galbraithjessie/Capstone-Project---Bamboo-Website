import React, { Component } from 'react';

import NavigationContainer from './navigation/navigation-container';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <NavigationContainer />
      </div>
    );
  }
}
