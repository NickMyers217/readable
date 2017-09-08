import * as api from '../api';

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECIEVE_CATEGORIES = 'RECIEVE_CATEGOREIS';
export const REQUEST_CATEGORIES_ERROR = 'REQUEST_CATEGORIES_ERROR';

export const requestCategories = () => ({
  type: REQUEST_CATEGORIES
});

export const recieveCategories = categories => ({
  type: RECIEVE_CATEGORIES,
  categories,
  recievedAt: Date.now()
});

export const requestCategoriesError = error => ({
  type: REQUEST_CATEGORIES_ERROR,
  error,
  erroredAt: Date.now()
});

export const fetchAllCategories = () => dispatch => {
  dispatch(requestCategories());
  return api.fetchAllCategories()
    .then(res => res.json())
    .then(({categories}) => dispatch(recieveCategories(categories)))
    .catch(err => dispatch(requestCategoriesError(err)));
};