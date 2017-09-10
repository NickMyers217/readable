import React from 'react';
import { Link } from 'react-router-dom';

import Card from './util/Card';
import Timestamp from './util/Timestamp';
import PostActionsContainer from '../containers/PostActions';

const PostCard = ({ post, summarizeBody }) => (
  <Card
    title={
      <Link to={`/${post.category}/${post.id}`}>
        {post.title} <span className='badge badge-primary'>{post.category}</span>
      </Link>
    }
    bodyText={
      summarizeBody
        ? `${post.body.split(' ').slice(0, 20).join(' ')}...`
        : post.body
    }
    subtitle={
      <span>Submitted by <strong>{post.author}</strong></span>
    }
    footer={
      <Timestamp time={post.timestamp} />
    }>
      <h6 className='mb-2 text-muted'>
        {post.comments.length} comments
      </h6>
      <PostActionsContainer post={post} />
  </Card>
);

export default PostCard;