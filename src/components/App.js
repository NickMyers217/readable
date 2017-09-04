import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import PostsView from './PostsView';

// TODO: Implement PostDetails page
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={PostsView} />
          <Route exact path="/:category" component={PostsView} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
