import React from 'react';
import { connect } from 'react-redux';

import Comments from '../components/comments/Comments';
import { setFormMode, FORM_MODES, clearForm } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  postId: ownProps.postId,
  comments: ownProps.comments
});

const mapDispatchToProps = dispatch => ({
  setupForm: () => {
    dispatch(setFormMode(FORM_MODES.CREATE_COMMENT));
    dispatch(clearForm());
  }
});

const CommentsContainer = connect(mapStateToProps, mapDispatchToProps)(Comments);

export default CommentsContainer;