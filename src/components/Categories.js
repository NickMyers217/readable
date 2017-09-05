import React, { Component } from 'react';

import CategoryList from './CategoryList';

class Categories extends Component {
  componentDidMount() {
    this.props.fetchAllCategories();
  }

  hasSuccesfullyFetched() {
    const { isFetching, isError } = this.props;
    return !isFetching && !isError;
  }

  hasFetchedWithError() {
    const { isFetching, isError } = this.props;
    return !isFetching && isError;
  }

  render() {
    const { categories, updateCategoryAndTitle, isFetching } = this.props;
    return (
      <div className='row'>
        <div className='col-12 mb-4'>
          <h3>Categories</h3>
        </div>
        <div className='col-12'>
          <CategoryList
            isSuccess={this.hasSuccesfullyFetched()}
            isError={this.hasFetchedWithError()}
            isLoading={isFetching}
            categories={categories}
            clickFn={updateCategoryAndTitle} />
        </div>
      </div>
    );
  }
};

export default Categories;