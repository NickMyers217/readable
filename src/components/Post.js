import React from 'react';

const style = {
  width: '100%',
  marginTop: '15px',
  marginBottom: '15px'
};

export const PostSummary = ({post}) => (
  <div className='card' style={style}>
    <div className='card-body'>
      <h4 className='card-title'>
        {post.title} <span className='badge badge-primary'>{post.category}</span>
      </h4>
      {/* TODO: Use the timestampe somewhere in here */}
      <h6 className='card-subtitle mb-2 text-muted'>
        {`Submitted by: ${post.author}`}
      </h6>
      {/* TODO: Show how many comments there are */}
      {/* TODO: Show the vote score and up/down vote buttons */}
      {/* TODO: Flesh this out to be a 20 word summary */}
      <p className='card-text'>{post.body}</p>
      {/* TODO: Flesh this out with edit and delete buttons */}
      <a href='#' className='card-link'>Card link</a>
      <a href='#' className='card-link'>Another link</a>
    </div>
  </div>
);