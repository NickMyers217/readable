import React from 'react';

import AsyncLoader from './AsyncLoader';
import { PostSummary } from './Post';

const PostList = ({ isLoading, isSuccess, isError, posts }) => (
  <div>
    <AsyncLoader
      isLoading={isLoading}
      isSuccess={isSuccess}
      isError={isError}
      errorMessage='There was an error while retrieving the posts!'>
      {posts.length > 0
        ? posts.map(post => <PostSummary key={post.id} post={post} />)
        : <h5 className='text text-secondary'>There are no posts in this category :(</h5>}
    </AsyncLoader>
  </div>
);

export default PostList;