import {combineReducers} from 'redux';

import postsReducer from './posts';
import categoriesReducer from './categories';
import dataFormReducer from './dataForm';

const rootReducer = combineReducers({
  postsList: postsReducer,
  categoriesList: categoriesReducer,
  dataForm: dataFormReducer
});

export default rootReducer;