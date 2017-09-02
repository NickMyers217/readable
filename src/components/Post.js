import React from 'react';

const style = {
  width: '100%',
  marginTop: '15px',
  marginBottom: '15px'
};

// TODO: PropTypes
const Post = ({post}) => (
  <div className="card" style={style}>
    <div className="card-body">
      <h4 className="card-title">
        {post.title} <span className="badge badge-primary">{post.category}</span>
      </h4>
      <h6 className="card-subtitle mb-2 text-muted">
        {post.author}
      </h6>
      <p className="card-text">{post.body}</p>
      <a href="#" className="card-link">Card link</a>
      <a href="#" className="card-link">Another link</a>
    </div>
  </div>
);

export default Post;