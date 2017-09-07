import React, { Component } from 'react';

import AsyncLoader from './AsyncLoader';
import Post from './Post';

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

  render() {
    const { match, isFetching, posts } = this.props;
    return (
      <div className='container' style={{ paddingTop: '15px' }}>
        <div className='row'>
          <div className='col-12'>
            <h3>Post Details</h3>
            <AsyncLoader
              isLoading={isFetching}
              isSuccess={this.hasSuccesfullyFetched()}
              isError={this.hasFetchedWithError()}
              errorMessage='There was an error while retrieving the details for this post!'>
              {posts.length > 0
                ? posts.map(post => (
                  <Post
                    key={post.id}
                    post={post}
                    showComments={true} />
                ))
                : <h5 className='text text-secondary'>There is no post here! :(</h5>}
            </AsyncLoader>
          </div>
        </div>
      </div>
    );
  }
};

export default PostDetailsView;