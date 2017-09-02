import React, { Component } from 'react';

import PostsContainer from './containers/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostsContainer />
      </div>
    );
  }
}

export default App;
