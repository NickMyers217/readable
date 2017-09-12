import React from 'react';
import { connect } from 'react-redux';

import PostDetailsView from '../components/views/PostDetailsView';
import { fetchSinglePost } from '../actions';

const mapStateToProps = state => state.postsList;
const mapDispatchToProps = dispatch => ({
  fetchSinglePost: postId => {
    dispatch(fetchSinglePost(postId));
  }
});

const PostDetailsViewContainer =
  connect(mapStateToProps, mapDispatchToProps)(PostDetailsView);

export default PostDetailsViewContainer;