import React from 'react';

import PostsContainer from '../containers/Posts';
import CategoriesContainer from '../containers/Categories';

const PostsView = ({match}) => (
  <div className='container' style={{ paddingTop: '15px' }}>
    <div className='row'>
      <div className='col-12 col-sm-3'>
        <CategoriesContainer />
      </div>
      <div className='col-12 col-sm-9'>
        <PostsContainer match={match} />
      </div>
    </div>
  </div>
);

export default PostsView;