import {combineReducers} from 'redux';

import postsReducer from './posts';
import categoriesReducer from './categories';
import postFormReducer from './postForm';

const rootReducer = combineReducers({
  postsList: postsReducer,
  categoriesList: categoriesReducer,
  postForm: postFormReducer
});

export default rootReducer;