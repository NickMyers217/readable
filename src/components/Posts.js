import React from 'react';

import Post from './Post';

// TODO: PropTypes
class Posts extends React.Component {
  componentDidMount () {
    const params = this.props.match.params;

    this.props.fetchAllPosts();

    if (params.category && params.category !== this.props.category) {
      let category = params.category ? params.category : null;
      let title = category ? `Posts for ${category}` : 'All Posts';
      this.props.updateCategoryAndTitle(category, title);
    }
  }

  // TODO: Implement the categories list component
  // TODO: Implement filtering
  render () {
    return (
      <div className='container'>
        <h3>{this.props.title}</h3>
        <hr />
        {this.props.posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    );
  }
};

export default Posts;