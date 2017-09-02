import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import PostsContainer from './containers/Posts';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={PostsContainer} />
          <Route exact path="/:category" component={PostsContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
