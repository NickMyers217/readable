import React from 'react';

import { EditButton, DeleteButton } from './util/Buttons';
import Voter from './Voter';

const Actions = ({ data, populateFormForEditing, deleteData, onVote, voterTop=0 }) => (
  <div>
    <Voter
      score={data.voteScore}
      top={voterTop}
      onUpvote={() => onVote(data, true)}
      onDownvote={() => onVote(data, false)} />
    <EditButton
      tooltip='Edit'
      modalId='postAndCommentModal'
      onClick={() => populateFormForEditing(data)} />
    <DeleteButton
      tooltip='Delete'
      onClick={() => {if (window.confirm('Are you sure you want to delete this?')) { deleteData(data) }}} />
  </div>
);

export default Actions;