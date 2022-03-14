import React, { Component } from 'react';

import RouteComponents from './RouteComponents';
import Navbar from './Navbar';

class App extends Component{

  render() {
    return (
      <div>
        <Navbar />
        <RouteComponents />
      </div>
    );
  }
}


export default App;
