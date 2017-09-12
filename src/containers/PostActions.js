import React from 'react';
import { connect } from 'react-redux';

import Actions from '../components/Actions';
import { setFormMode, FORM_MODES, populateForm, deletePostServer } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  data: ownProps.data
});

const mapDispatchToProps = dispatch => ({
  populateFormForEditing: post => {
    dispatch(setFormMode(FORM_MODES.EDIT_POST));
    dispatch(populateForm(post));
  },
  deleteData: postId => {
    dispatch(deletePostServer(postId));
  }
});

const PostActionsContainer = connect(mapStateToProps, mapDispatchToProps)(Actions);

export default PostActionsContainer;