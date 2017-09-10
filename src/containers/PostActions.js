import React from 'react';
import { connect } from 'react-redux';

import PostActions from '../components/PostActions';
import { setFormMode, populateForm, deletePostServer } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  post: ownProps.post
});

const mapDispatchToProps = dispatch => ({
  populateFormForEditing: post => {
    dispatch(setFormMode('edit'));
    dispatch(populateForm(post));
  },
  deletePost: postId => {
    dispatch(deletePostServer(postId));
  }
});

const PostActionsContainer = connect(mapStateToProps, mapDispatchToProps)(PostActions);

export default PostActionsContainer;