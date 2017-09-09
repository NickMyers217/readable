import React from 'react';
import { Link } from 'react-router-dom';

import Card from './util/Card';
import { CreateButton, EditButton, DeleteButton } from './util/Buttons';
import Voter from './Voter';
import Timestamp from './util/Timestamp';

const CommentCard = ({ comment }) => (
  <Card
    bodyText={comment.body}
    footer={
      <span>
        Submitted by {comment.author} at <Timestamp time={comment.timestamp} />
      </span>
    }>
      <Voter score={comment.voteScore} top={20} />
      <EditButton tooltip='Edit this comment' />
      <DeleteButton tooltip='Delete this comment' />
  </Card>
);

export default CommentCard;