import React from 'react';

const PostDetailsView = ({ match }) => (
  <div className='container' style={{ paddingTop: '15px' }}>
    <div className='row'>
      <div className='col-12'>
        <h3>Post Details</h3>
        <p>{JSON.stringify(match)}</p>
      </div>
    </div>
  </div>
);

export default PostDetailsView;