import React from 'react';
import { connect } from 'react-redux';

import Actions from '../components/Actions';
import { setFormMode, FORM_MODES, populateForm } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  data: ownProps.data,
  voterTop: ownProps.voterTop
});

const mapDispatchToProps = dispatch => ({
  populateFormForEditing: comment => {
    dispatch(setFormMode(FORM_MODES.EDIT_COMMENT));
    dispatch(populateForm(comment));
  },
  deleteData: commentId => {
    // TODO: delete a comment on the server
    // dispatch(deleteCommentServer(commentId));
  }
});

const CommentActionsContainer = connect(mapStateToProps, mapDispatchToProps)(Actions);

export default CommentActionsContainer;