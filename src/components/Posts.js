import React from 'react';

import Post from './Post';

// TODO: PropTypes
class Posts extends React.Component {
  componentDidMount() {
    const params = this.props.match.params;
    const category = params.category ? params.category : null;
    const title = category ? `Posts for ${category}` : 'All Posts';

    this.props.fetchAllPosts();
    this.props.updateCategoryAndTitle(category, title);
  }

  getPostsFilteredByCategory() {
    const { category } = this.props;
    return this.props.posts.filter(post => (
      category === null || post.category === category
    ));
  }

  // TODO: Implement sorting
  // TODO: Factor in async statuses
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <hr />
        {this.getPostsFilteredByCategory().length > 0
          ? this.getPostsFilteredByCategory().map(post => (
            <Post key={post.id} post={post} />
          ))
          : <h5 className='text text-secondary'>There are no posts in this category :(</h5>}
      </div>
    );
  }
};

export default Posts;