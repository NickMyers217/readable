import React from 'react';

const Post = ({post}) => (
  <div>
    <pre>{JSON.stringify(post)}</pre>
  </div>
);

export default Post;