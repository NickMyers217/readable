import React from 'react';
import { connect } from 'react-redux';

import Posts from '../components/posts/Posts';
import { setFormMode, FORM_MODES, clearForm, fetchAllPosts, updateCategoryAndTitle, applyNewSorting } from '../actions';

const mapStateToProps = state => state.postsList;

const mapDispatchToProps = dispatch => ({
  setupForm: () => {
    dispatch(setFormMode(FORM_MODES.CREATE_POST));
    dispatch(clearForm());
  },
  fetchAllPosts: category => {
    dispatch(fetchAllPosts(category));
  },
  updateCategoryAndTitle: (category, title) => {
    dispatch(updateCategoryAndTitle(category, title));
  },
  applyNewSorting: sorting => {
    dispatch(applyNewSorting(sorting));
  }
});

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;