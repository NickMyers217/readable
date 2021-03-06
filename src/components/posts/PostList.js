import React from 'react';

import AsyncLoader from '../util/AsyncLoader';
import Post from './Post';

const PostList = ({ isLoading, isSuccess, isError, posts, showComments=false }) => {
  const visiblePosts = posts.filter(({ deleted }) => !deleted);
  return (
    <div>
      <AsyncLoader
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        errorMessage='There was an error while retrieving the posts!'>
        {visiblePosts.length > 0
          ? visiblePosts.map(post => (
            <Post
              key={post.id}
              post={post}
              summarizeBody={true}
              showComments={showComments} />
          ))
          : <h5 className='text text-secondary'>There are no posts here :(</h5>}
      </AsyncLoader>
    </div>
  );
};

export default PostList;