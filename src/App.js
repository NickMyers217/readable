import React, { Component } from 'react';

import PostsContainer from './containers/Posts';

class App extends Component {
  render() {
    return (
      <div className="container">
        <PostsContainer />
      </div>
    );
  }
}

export default App;
