import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import PostsView from './components/PostsView';

class App extends React.Component {
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
