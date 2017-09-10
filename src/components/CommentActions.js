import React from 'react';

import { EditButton, DeleteButton } from './util/Buttons';
import Voter from './Voter';

const CommentActions = ({ comment }) => (
  <div>
    <Voter score={comment.voteScore} top={20} />
    <EditButton tooltip='Edit this comment' />
    <DeleteButton tooltip='Delete this comment' />
  </div>
);

export default CommentActions;