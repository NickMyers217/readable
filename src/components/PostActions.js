import React from 'react';

import { EditButton, DeleteButton } from './util/Buttons';
import Voter from './Voter';

const PostActions = ({ post, populateFormForEditing, deletePost }) => (
  <div>
    <Voter score={post.voteScore} />
    <EditButton
      tooltip='Edit this post'
      modalId='createPostModal'
      onClick={() => populateFormForEditing(post)} />
    <DeleteButton
      tooltip='Delete this post'
      onClick={() => {if (window.confirm('Are you sure you want to delete this?')) { deletePost(post.id) }}} />
  </div>
);

export default PostActions;