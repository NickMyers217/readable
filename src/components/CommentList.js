import React from 'react';

import CommentCard from './CommentCard';
import { CreateButton } from './util/Buttons';
import Modal from './util/Modal';

const CommentList = ({ comments=[] }) => (
  <div className='mt-4'>
    <div className='row mb-2'>
      <div className='col-4'>
        <h5>Comments</h5>
      </div>
      <div className='col-8'>
        <ul className='nav nav-pills justify-content-end'>
          <li className='nav-item'>
            <CreateButton tooltip='Create a new comment' modalId='createCommentModal' />
            <Modal id='createCommentModal' title='Add a comment!'>
            </Modal>
          </li>
        </ul>
      </div>
    </div>
    {comments.length > 0
      ? comments.map(comment => <CommentCard key={comment.id} comment={comment} />)
      : <h5 className='text text-secondary'>There are no comments on this post yet! :(</h5>}
  </div>
);

export default CommentList;