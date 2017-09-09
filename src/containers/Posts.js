import React from 'react';
import { connect } from 'react-redux';

import Posts from '../components/Posts';
import { fetchAllPosts, updateCategoryAndTitle, applyNewSorting, deletePostServer } from '../actions';

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
  },
  deletePost: postId => {
    dispatch(deletePostServer(postId));
  }
});

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;