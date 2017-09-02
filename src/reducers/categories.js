import {
  REQUEST_CATEGORIES,
  RECIEVE_CATEGORIES,
  REQUEST_CATEGORIES_ERROR,
} from '../actions';

const initialCategoriesState = {
  isFetching: false,
  isError: false,
  categories: []
};

const categoriesReducer = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return {
        ...state,
        isFetching: true
      };
    case RECIEVE_CATEGORIES:
      return {
        ...state,
        isFetching: false,
        isError: false,
        categories: action.categories,
        lastUpdated: action.recievedAt
      };
    case REQUEST_CATEGORIES_ERROR:
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

export default categoriesReducer;