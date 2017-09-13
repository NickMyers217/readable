import React from 'react';

import { CreateButton } from '../util/Buttons';
import Modal from '../util/Modal';
import DataFormContainer from '../../containers/DataForm';
import CommentList from './CommentList';

const Comments = ({ postId, comments=[], setupForm }) => (
  <div className='mt-4'>
    <div className='row mb-2'>
      <div className='col-6'>
        <h5>Comments</h5>
      </div>
      <div className='col-6'>
        <ul className='nav nav-pills justify-content-end'>
          <li className='nav-item'>
            <CreateButton tooltip='Create a new comment' modalId='postAndCommentModal' onClick={setupForm} />
            <Modal id='postAndCommentModal' title='Add a comment!'>
              <DataFormContainer data={{parentId: postId}} />
            </Modal>
          </li>
        </ul>
      </div>
    </div>
    <CommentList comments={comments.filter(c => !c.deleted)} />
  </div>
);

export default Comments;