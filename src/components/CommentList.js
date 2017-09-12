import React from 'react';

import CommentCard from './CommentCard';

const CommentList = ({ comments }) => (
  <div>
    {comments.length > 0
      ? comments.map(comment => <CommentCard key={comment.id} comment={comment} />)
      : <h5 className='text text-secondary'>There are no comments on this post yet! :(</h5>}
  </div>
);

export default CommentList;