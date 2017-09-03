import React, { Component } from 'react';

import Post from './Post';
import LoadingSpinner from './LoadingSpinner';
import Alert from './Alert';

const PostList = ({ posts, isSuccess, isError, isLoading }) => (
  <div>
    {isLoading &&
      <LoadingSpinner />}
    {isSuccess &&
      (posts.length > 0
        ? posts.map(post => <Post key={post.id} post={post} />)
        : <h5 className='text text-secondary'>There are no posts in this category :(</h5>)}
    {isError &&
      <Alert
        text={'There was an error fetching the posts!'}
        type={'danger'} />}
  </div>
);

class Posts extends Component {
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

  hasSuccesfullyFetched() {
    const { isFetching, isError, lastUpdated } = this.props;
    return !isFetching && !isError && lastUpdated;
  }

  hasFetchedWithError() {
    const { isFetching, isError } = this.props;
    return !isFetching && isError;
  }

  // TODO: Implement sorting
  render() {
    const { isFetching } = this.props;

    return (
      <div>
        <h4>{this.props.title}</h4>
        <hr />
        <PostList
          isSuccess={this.hasSuccesfullyFetched()}
          isError={this.hasFetchedWithError()}
          isLoading={isFetching}
          posts={this.getPostsFilteredByCategory()} />
      </div>
    );
  }
};

export default Posts;