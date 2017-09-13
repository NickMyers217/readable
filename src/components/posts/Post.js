import React from 'react';

import PostCard from './PostCard';
import CommentsContainer from '../../containers/Comments';

const Post = ({ post, summarizeBody=false, showComments=false }) => (
  <div>
    <PostCard post={post} summarizeBody={summarizeBody} />
    {showComments &&
      <CommentsContainer postId={post.id} comments={post.comments} />}
  </div>
);

export default Post;