import React from 'react';
import IoAndroidDelete from 'react-icons/lib/io/android-delete';
import IoAndroidCreate from 'react-icons/lib/io/android-create';

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
      <button type='button' className='btn btn-primary' data-toggle='tooltip' data-placement='top' title='Edit this post'>
        <IoAndroidCreate size={25} />
      </button>
      <button type='button' className='btn btn-danger' data-toggle='tooltip' data-placement='top' title='Delete this post'>
        <IoAndroidDelete size={25} />
      </button>
    </div>
  </div>
);