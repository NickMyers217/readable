import React, { Component } from 'react';

import Post from './Post';

class Posts extends Component {
  componentDidMount () {
    this.props.fetchAllPosts();
  }

  render () {
    return (
      <div>
        <h3>Test!</h3>
        {this.props.posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    );
  }
};

export default Posts;