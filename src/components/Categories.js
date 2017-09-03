import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LoadingSpinner from './LoadingSpinner';
import Alert from './Alert';

const CategoryLink = ({ name, path, clickFn }) => (
  <Link to={path} onClick={() => clickFn(name, `Posts for ${name}`)}>
    {name}
  </Link>
);

const CategoryList = ({ categories, clickFn, isSuccess, isError, isLoading }) => (
  <div>
    {isLoading &&
      <LoadingSpinner />}
    {isSuccess &&
      <ul className='list-group'>
        <li key={'_all'} className='list-group-item'>
          <CategoryLink name='All' path='/' clickFn={() => clickFn(null, 'All Posts')} />
        </li>
        {categories.map(({ name, path }) => (
          <li key={name} className='list-group-item'>
            <CategoryLink name={name} path={path} clickFn={clickFn} />
          </li>))}
      </ul>}
    {isError &&
      <Alert
        text={'There was an error while retrieving the categories!'}
        type={'danger'} />}
  </div>
);

class Categories extends Component {
  componentDidMount() {
    this.props.fetchAllCategories();
  }

  hasSuccesfullyFetched() {
    const { isFetching, isError, lastUpdated } = this.props;
    return !isFetching && !isError && lastUpdated;
  }

  hasFetchedWithError() {
    const { isFetching, isError } = this.props;
    return !isFetching && isError;
  }

  render() {
    const { categories, updateCategoryAndTitle, isFetching } = this.props;
    return (
      <div>
        <h4>Categories</h4>
        <hr />
        <CategoryList
          isSuccess={this.hasSuccesfullyFetched()}
          isError={this.hasFetchedWithError()}
          isLoading={isFetching}
          categories={categories}
          clickFn={updateCategoryAndTitle} />
      </div>
    );
  }
};

export default Categories;