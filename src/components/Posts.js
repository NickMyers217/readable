import React, { Component } from 'react';

import Post from './Post';

// TODO: PropTypes
class Posts extends Component {
  componentDidMount () {
    this.props.fetchAllPosts();
  }

  render () {
    return (
      <div>
        <h3>All Posts</h3>
        <hr />
        {this.props.posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    );
  }
};

export default Posts;