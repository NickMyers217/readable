import React from 'react';
import { connect } from 'react-redux';

import Posts from '../components/Posts';
import { fetchAllPosts, updateCategoryAndTitle, applyNewSorting } from '../actions';

const mapStateToProps = state => state.postsList;
const mapDispatchToProps = dispatch => ({
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