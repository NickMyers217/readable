import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import PostsView from './PostsView';
import PostDetailsViewContainer from '../containers/PostDetailsView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={PostsView} />
          <Route exact path="/:category" component={PostsView} />
          <Route exact path="/:category/:post_id" component={PostDetailsViewContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
