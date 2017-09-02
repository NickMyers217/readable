import React from 'react';
import {connect} from 'react-redux';

import Categories from '../components/Categories';
import {fetchAllCategories, updateCategoryAndTitle} from '../actions';

const mapStateToProps = state => state.categories;
const mapDispatchToProps = dispatch => ({
  fetchAllCategories: () => {
    dispatch(fetchAllCategories());
  },
  updateCategoryAndTitle: (category, title) => {
    dispatch(updateCategoryAndTitle(category, title));
  }
});

const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories);

export default CategoriesContainer;