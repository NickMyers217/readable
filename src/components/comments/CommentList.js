import React from 'react';

import CommentCard from './CommentCard';

const CommentList = ({ comments }) => {
  const visibleComments = comments.filter(({ deleted }) => !deleted);
  return (
    <div>
      {visibleComments.length > 0
        ? visibleComments.map(comment => <CommentCard key={comment.id} comment={comment} />)
        : <h5 className='text text-secondary'>There are no comments on this post yet! :(</h5>}
    </div>
  );
};

export default CommentList;