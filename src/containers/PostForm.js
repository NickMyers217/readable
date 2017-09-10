import React from 'react';
import { connect } from 'react-redux';

import PostForm from '../components/PostForm';
import { onFieldChange, addNewPost, addPostToList, editPost, editPostInList, clearForm } from '../actions';

const mapStateToProps = state => ({
  ...state.postForm,
  categories: state.categoriesList.categories
});

const closeModal = () => {
  document.getElementById('closeModalButton').click();
};

const mapDispatchToProps = dispatch => ({
  editPost: (id, title, body) => {
    dispatch(editPost(id, title, body))
      .then(({ result }) => dispatch(editPostInList(result)))
      .then(closeModal);
  },
  addNewPost: (title, body, author, category) => {
    dispatch(addNewPost(title, body, author, category))
      .then(({ result }) => dispatch(addPostToList(result)))
      .then(closeModal);
  },
  onFieldChange: (field, value) => {
    dispatch(onFieldChange(field, value));
  }
});

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm);

export default PostFormContainer;