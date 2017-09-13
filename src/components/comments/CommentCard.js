import React from 'react';

import Card from '../util/Card';
import Timestamp from '../util/Timestamp';
import CommentActionsContainer from '../../containers/CommentActions';

const CommentCard = ({ comment }) => (
  <Card
    bodyText={comment.body}
    footer={
      <span>
        Submitted by {comment.author} at <Timestamp time={comment.timestamp} />
      </span>
    }>
    <CommentActionsContainer data={comment} voterTop={20} />
  </Card>
);

export default CommentCard;