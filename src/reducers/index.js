// TODO: Make a reducer that will contain all the posts!

import {
  REQUEST_POSTS,
  RECIEVE_POSTS,
  REQUEST_POSTS_ERROR
} from '../actions';

const initialPostsState = {
  isFetching: false,
  isError: false,
  posts: []
};

export const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      };
    case RECIEVE_POSTS:
      return {
        ...state,
        isFetching: false,
        isError: false,
        posts: action.posts,
        lastUpdated: action.recievedAt
      };
    case REQUEST_POSTS_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true,
        error: action.error,
        erroredAt: action.erroredAt
      };
    default:
      return state;
  }
};