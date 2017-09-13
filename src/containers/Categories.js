import React from 'react';
import {connect} from 'react-redux';

import Categories from '../components/categories/Categories';
import {
  fetchAllCategories,
  fetchAllPosts,
  updateCategoryAndTitle
} from '../actions';

const mapStateToProps = state => state.categoriesList;
const mapDispatchToProps = dispatch => ({
  fetchAllCategories: () => {
    dispatch(fetchAllCategories());
  },
  updateCategoryAndTitle: (category, title) => {
    dispatch(updateCategoryAndTitle(category, title));
    dispatch(fetchAllPosts(category));
  }
});

const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories);

export default CategoriesContainer;