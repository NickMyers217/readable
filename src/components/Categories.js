import React from 'react';
import { Link } from 'react-router-dom';

import LoadingSpinner from './LoadingSpinner';

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
      <ul>
        <li key={'_all'}>
          <CategoryLink
            name='All'
            path='/'
            clickFn={() => clickFn(null, 'All Posts')} />
        </li>
        {categories.map(({ name, path }) => (
          <li key={name}>
            <CategoryLink name={name} path={path} clickFn={clickFn} />
          </li>))}
      </ul>}
    {isError &&
      <div className='alert alert-danger' role='alert'>
        There was an error while retrieving the categories!
      </div>}
  </div>
);

// TODO: Proptypes
class Categories extends React.Component {
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