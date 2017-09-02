import React from 'react';
import {connect} from 'react-redux';

import Posts from '../components/Posts';
import {fetchAllPosts, updateCategoryAndTitle} from '../actions';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  fetchAllPosts: () => {
    dispatch(fetchAllPosts());
  },
  updateCategoryAndTitle: (category, title) => {
    dispatch(updateCategoryAndTitle(category, title));
  }
});

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;