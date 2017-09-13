import * as moment from 'moment';

import {
  REQUEST_POSTS,
  RECIEVE_POSTS,
  REQUEST_POSTS_ERROR,
  UPDATE_CATEGORY_AND_TITLE,
  APPLY_NEW_SORTING,
  ADD_POST_TO_LIST,
  EDIT_POST_IN_LIST,
  DELETE_POST_IN_LIST,
  ADD_COMMENT_TO_LIST,
  EDIT_COMMENT_IN_LIST,
  DELETE_COMMENT_IN_LIST
} from '../actions';

// This state will drive the sorting widget on the posts list
const sortState = {
  highestScore: {
    option: 'highestScore',
    display: 'Highest Score',
    sortFn: function (postA, postB) {
      return (postA.voteScore - postB.voteScore) * -1;
    }
  },
  lowestScore: {
    option: 'lowestScore',
    display: 'Lowest Score',
    sortFn: function (postA, postB) {
      return (postA.voteScore - postB.voteScore);
    }
  },
  newest: {
    option: 'newest',
    display: 'Newest',
    sortFn: function (postA, postB) {
      const timestampA = moment(postA.timestamp);
      const timestampB = moment(postB.timestamp);
      const diff = timestampA.diff(timestampB);
      return diff * -1;
    }
  },
  oldest: {
    option: 'oldest',
    display: 'Oldest',
    sortFn: function (postA, postB) {
      const timestampA = moment(postA.timestamp);
      const timestampB = moment(postB.timestamp);
      const diff = timestampA.diff(timestampB);
      return diff;
    }
  }
};

const initialPostsState = {
  isFetching: false,
  isError: false,
  category: null,
  title: 'All Posts',
  // Default to the first avaiable sorting
  selectedSort: sortState[Object.keys(sortState)[0]].option,
  availableSortings: sortState,
  posts: []
};

const reducePosts = (state, reduceFn) => {
  // The list of posts should observe the currently set sort
  let newPosts = reduceFn(state.posts);
  newPosts.sort(state.availableSortings[state.selectedSort].sortFn);
  return { ...state, posts: newPosts };
};

const mapPosts = (state, fn) => {
  return reducePosts(state, posts => posts.map(fn));
};

const mapSpecificPost = (state, postId, fn) => {
  return mapPosts(state, post => (
    post.id === postId ? fn(post) : post
  ));
};

const reduceComments = (state, postId, reduceFn) => {
  return mapSpecificPost(state, postId, post => {
    // Comments are always sorted by highest score
    let newComments = reduceFn(post.comments);
    newComments.sort(state.availableSortings.highestScore.sortFn);
    return {
      ...post,
      comments: newComments
    };
  });
};

const mapComments = (state, postId, fn) => {
  return reduceComments(state, postId, comments => comments.map(fn));
};

const mapSpecificComment = (state, postId, commentId, fn) => {
  return mapComments(state, postId, comment => (
    comment.id === commentId ? fn(comment) : comment
  ));
};

const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, isFetching: true };

    case RECIEVE_POSTS:
      const newState = { ...state, isFetching: false, isError: false, lastUpdated: action.recievedAt, posts: [] };
      return reducePosts(newState, posts => (
        action.posts.map(post => {
          let newComments = [].concat(post.comments);
          newComments.sort(state.availableSortings.highestScore.sortFn);
          return { ...post, comments: newComments };
        })
      ));

    case REQUEST_POSTS_ERROR:
      return { ...state, isFetching: false, isError: true, error: action.error, erroredAt: action.erroredAt };

    case UPDATE_CATEGORY_AND_TITLE:
      return { ...state, category: action.category, title: action.title };

    case APPLY_NEW_SORTING:
      return reducePosts({ ...state, selectedSort: action.sorting }, posts => posts);

    case ADD_POST_TO_LIST:
      return reducePosts(state, posts => (
        // Only add the post if it is in the current category
        action.post.category === state.category || state.category === null
          ? posts.concat([action.post])
          : posts
      ));

    case EDIT_POST_IN_LIST:
      return mapSpecificPost(state, action.post.id, post => action.post);

    case DELETE_POST_IN_LIST:
      return mapSpecificPost(state, action.post.id, post => ({ ...post, deleted: true }));

    case ADD_COMMENT_TO_LIST:
      return reduceComments(state, action.comment.parentId, comments => comments.concat([action.comment]));

    case EDIT_COMMENT_IN_LIST:
      return mapSpecificComment(state, action.comment.parentId, action.comment.id, comment => action.comment);

    case DELETE_COMMENT_IN_LIST:
      return mapSpecificComment(state, action.comment.parentId, action.comment.id, comment => ({
        ...action.comment,
        deleted: true
      }));

    default:
      return state;
  }
};

export default postsReducer;