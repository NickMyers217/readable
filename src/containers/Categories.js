import React from 'react';
import {connect} from 'react-redux';

import Categories from '../components/Categories';
import {} from '../actions';

const mapStateToProps = state => state.categories;
const mapDispatchToProps = dispatch => ({
});

const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories);

export default CategoriesContainer;