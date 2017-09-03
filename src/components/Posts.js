import React, { Component } from 'react';

import { PostSummary } from './Post';
import LoadingSpinner from './LoadingSpinner';
import Alert from './Alert';

const PostList = ({ posts, isSuccess, isError, isLoading }) => (
  <div>
    {isLoading &&
      <LoadingSpinner />}
    {isSuccess &&
      (posts.length > 0
        ? posts.map(post => <PostSummary key={post.id} post={post} />)
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

    this.props.updateCategoryAndTitle(category, title);
    this.props.fetchAllPosts(category);
  }

  hasSuccesfullyFetched() {
    const { isFetching, isError, lastUpdated } = this.props;
    return !isFetching && !isError;
  }

  hasFetchedWithError() {
    const { isFetching, isError } = this.props;
    return !isFetching && isError;
  }

  // TODO: Implement sorting
  render() {
    const { isFetching, posts } = this.props;

    return (
      <div>
        <h4>{this.props.title}</h4>
        <hr />
        <PostList
          isSuccess={this.hasSuccesfullyFetched()}
          isError={this.hasFetchedWithError()}
          isLoading={isFetching}
          posts={posts} />
      </div>
    );
  }
};

export default Posts;