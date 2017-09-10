import React from 'react';

import PostCard from './PostCard';
import CommentList from './CommentList';

const Post = ({ post, summarizeBody=false, showComments=false }) => (
  <div>
    <PostCard post={post} summarizeBody={summarizeBody} />
    {showComments &&
      <CommentList comments={post.comments} />}
  </div>
);

export default Post;