import {combineReducers} from 'redux';

import postsReducer from './posts';
import categoriesReducer from './categories';

const rootReducer = combineReducers({
  postsList: postsReducer,
  categoriesList: categoriesReducer
});

export default rootReducer;