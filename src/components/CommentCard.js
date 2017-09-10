import React from 'react';

import Card from './util/Card';
import Timestamp from './util/Timestamp';
import CommentActions from './CommentActions';

const CommentCard = ({ comment }) => (
  <Card
    bodyText={comment.body}
    footer={
      <span>
        Submitted by {comment.author} at <Timestamp time={comment.timestamp} />
      </span>
    }>
    <CommentActions comment={comment} />
  </Card>
);

export default CommentCard;