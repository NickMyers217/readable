import React from 'react';
import { connect } from 'react-redux';

import PostForm from '../components/PostForm';
import { onFieldChange, addNewPost, addPostToList, clearForm } from '../actions';

const mapStateToProps = state => ({
  ...state.postForm,
  categories: state.categoriesList.categories
});

const mapDispatchToProps = dispatch => ({
  addNewPost: (title, body, author, category) => {
    const closeModal = () => {
      document.getElementById('closeModalButton').click();
    };
    dispatch(addNewPost(title, body, author, category))
      .then(({ result }) => dispatch(addPostToList(result)))
      .then(closeModal)
      .then(() => dispatch(clearForm()));
  },
  onFieldChange: (field, value) => {
    dispatch(onFieldChange(field, value));
  }
});

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm);

export default PostFormContainer;