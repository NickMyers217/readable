import React from 'react';
import { Link } from 'react-router-dom';

import Card from './util/Card';
import { CreateButton, EditButton, DeleteButton } from './util/Buttons';
import Voter from './Voter';
import Timestamp from './util/Timestamp';

const PostCard = ({ post, summarizeBody, onDeleteBtnClick }) => (
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
      <Voter score={post.voteScore} />
      <h6 className='mb-2 text-muted'>
        {post.comments.length} comments
      </h6>
      <EditButton tooltip='Edit this post' />
      <DeleteButton tooltip='Delete this post' onClick={() => onDeleteBtnClick(post.id)} />
  </Card>
);

export default PostCard;