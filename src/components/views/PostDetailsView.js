import React, { Component } from 'react';

import PostList from '../PostList';

class PostDetailsView extends Component {
  componentDidMount() {
    const { match, fetchSinglePost } = this.props;
    fetchSinglePost(match.params.post_id);
  }

  hasSuccesfullyFetched() {
    const { isFetching, isError } = this.props;
    return !isFetching && !isError;
  }

  hasFetchedWithError() {
    const { isFetching, isError } = this.props;
    return !isFetching && isError;
  }

  // TODO: Add a back button!
  render() {
    const { isFetching, posts } = this.props;
    return (
      <div className='container' style={{ paddingTop: '15px' }}>
        <div className='row'>
          <div className='col-12'>
            <h3>Post Details</h3>
            <PostList
              isLoading={isFetching}
              isSuccess={this.hasSuccesfullyFetched()}
              isError={this.hasFetchedWithError()}
              posts={posts}
              showComments={true} />
          </div>
        </div>
      </div>
    );
  }
};

export default PostDetailsView;