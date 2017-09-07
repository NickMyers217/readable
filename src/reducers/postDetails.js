import {
  REQUEST_POSTS,
  RECIEVE_POSTS,
  REQUEST_POSTS_ERROR
} from '../actions';

const initialState = {
  isFetching: false,
  isError: false
};

const postDetailsReducer = (state = initialState, action) => {
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
        post: action.posts,
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

export default postDetailsReducer;