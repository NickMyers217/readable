import React from 'react';
import { connect } from 'react-redux';

import DataForm from '../components/forms/DataForm';
import {
  onFieldChange,
  addNewPost,
  addPostToList,
  editPost,
  editPostInList,
  clearForm,
  addNewComment,
  addCommentToList,
  editComment,
  editCommentInList,
  FORM_MODES
} from '../actions';

const mapStateToProps = (state, ownProps) => ({
  data: {
    ...state.dataForm.data,
    ...ownProps.data
  },
  categories: state.categoriesList.categories,
  isFieldVisible: field => (
    state.dataForm.fieldFormModeRules[field].indexOf(state.dataForm.formMode) > -1
  ),
  isCreateMode: () => [FORM_MODES.CREATE_POST, FORM_MODES.CREATE_COMMENT].indexOf(state.dataForm.formMode) > -1,
  isEditMode: () => [FORM_MODES.EDIT_POST, FORM_MODES.EDIT_COMMENT].indexOf(state.dataForm.formMode) > -1,
  isPostMode: () => [FORM_MODES.CREATE_POST, FORM_MODES.EDIT_POST].indexOf(state.dataForm.formMode) > -1,
  isCommentMode: () => [FORM_MODES.CREATE_COMMENT, FORM_MODES.EDIT_COMMENT].indexOf(state.dataForm.formMode) > -1
});

const closeModal = () => {
  document.getElementById('closeModalButton').click();
};

const mapDispatchToProps = dispatch => ({
  addNewPost: (title, body, author, category) => {
    dispatch(addNewPost(title, body, author, category))
      .then(({ result }) => dispatch(addPostToList(result)))
      .then(closeModal);
  },
  editPost: (id, title, body) => {
    dispatch(editPost(id, title, body))
      .then(({ result }) => dispatch(editPostInList(result)))
      .then(closeModal);
  },
  addNewComment: (parentId, body, author) => {
    dispatch(addNewComment(parentId, body, author))
      .then(({ result }) => dispatch(addCommentToList(result)))
      .then(closeModal);
  },
  editComment: (id, body) => {
    dispatch(editComment(id, body))
      .then(({ result }) => dispatch(editCommentInList(result)))
      .then(closeModal);
  },
  onFieldChange: (field, value) => {
    dispatch(onFieldChange(field, value));
  }
});

const DataFormContainer = connect(mapStateToProps, mapDispatchToProps)(DataForm);

export default DataFormContainer;