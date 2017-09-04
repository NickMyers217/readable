import * as moment from 'moment';

import {
  REQUEST_POSTS,
  RECIEVE_POSTS,
  REQUEST_POSTS_ERROR,
  UPDATE_CATEGORY_AND_TITLE,
  APPLY_NEW_SORTING
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

const postsReducer = (state = initialPostsState, action) => {
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
        // The list of posts should observe the currently set sort
        posts: action.posts.sort(state.availableSortings[state.selectedSort].sortFn),
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
    case UPDATE_CATEGORY_AND_TITLE:
      return {
        ...state,
        category: action.category,
        title: action.title
      };
    case APPLY_NEW_SORTING:
      let sortedPosts = [].concat(state.posts);
      sortedPosts.sort(state.availableSortings[action.sorting].sortFn);
      return {
        ...state,
        selectedSort: action.sorting,
        posts: sortedPosts
      };
    default:
      return state;
  }
};

export default postsReducer;