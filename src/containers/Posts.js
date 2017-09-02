import React from 'react';
import {connect} from 'react-redux';

import Posts from '../components/Posts';
import {fetchAllPosts} from '../actions';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  fetchAllPosts: () => {
    dispatch(fetchAllPosts());
  }
});

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;