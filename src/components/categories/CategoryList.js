import React from 'react';
import { Link } from 'react-router-dom';

import AsyncLoader from '../util/AsyncLoader';

const CategoryLink = ({ name, path, clickFn }) => (
  <Link to={path} onClick={() => clickFn(name, `Posts for ${name}`)}>
    {name}
  </Link>
);

const CategoryList = ({ isLoading, isSuccess, isError, categories, clickFn }) => (
  <div>
    <AsyncLoader
      isLoading={isLoading}
      isSuccess={isSuccess}
      isError={isError}
      errorMessage='There was an error while retrieving the categories!'>
      <ul className='list-group'>
        <li key={'_all'} className='list-group-item'>
          <CategoryLink name='All' path='/' clickFn={() => clickFn(null, 'All Posts')} />
        </li>
        {categories.map(({ name, path }) => (
          <li key={name} className='list-group-item'>
            <CategoryLink name={name} path={path} clickFn={clickFn} />
          </li>))}
      </ul>
    </AsyncLoader>
  </div>
);

export default CategoryList;