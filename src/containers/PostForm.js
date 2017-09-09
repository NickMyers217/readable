import React from 'react';
import { connect } from 'react-redux';

import PostForm from '../components/PostForm';
import { onFieldChange, addNewPost } from '../actions';

const mapStateToProps = state => ({
  ...state.postForm,
  categories: state.categoriesList.categories
});

const mapDispatchToProps = dispatch => ({
  addNewPost: (title, body, author, category) => {
    dispatch(addNewPost(title, body, author, category));
  },
  onFieldChange: (field, value) => {
    dispatch(onFieldChange(field, value));
  }
});

const PostFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm);

export default PostFormContainer;