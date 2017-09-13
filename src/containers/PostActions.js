import React from 'react';
import { connect } from 'react-redux';

import Actions from '../components/Actions';
import { setFormMode, FORM_MODES, populateForm, deletePost, votePost } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  data: ownProps.data
});

const mapDispatchToProps = dispatch => ({
  populateFormForEditing: post => {
    dispatch(setFormMode(FORM_MODES.EDIT_POST));
    dispatch(populateForm(post));
  },
  deleteData: post => {
    dispatch(deletePost(post));
  },
  onVote: (post, isUpvote) => {
    dispatch(votePost(post, isUpvote));
  }
});

const PostActionsContainer = connect(mapStateToProps, mapDispatchToProps)(Actions);

export default PostActionsContainer;