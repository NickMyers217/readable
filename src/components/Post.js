import React from 'react';
import { Link } from 'react-router-dom';

import { CreateButton, EditButton, DeleteButton } from './Buttons';
import Card from './Card';
import Voter from './Voter';
import Timestamp from './Timestamp';

const CommentCard = ({ comment }) => (
  <Card
    bodyText={comment.body}
    footer={
      <span>
        Submitted by {comment.author} at <Timestamp time={comment.timestamp} />
      </span>
    }>
      <Voter score={comment.voteScore} top={20} />
      <EditButton tooltip='Edit this comment' />
      <DeleteButton tooltip='Delete this comment' />
  </Card>
);

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
      <Voter score={post.voteScore} />
      <h6 className='mb-2 text-muted'>
        {post.comments.length} comments
      </h6>
      <EditButton tooltip='Edit this post' />
      <DeleteButton tooltip='Delete this post' />
  </Card>
);

const Post = ({ post, summarizeBody=false, showComments=false }) => (
  <div>
    <PostCard post={post} summarizeBody={summarizeBody} />
    {showComments &&
      <div className='mt-4'>
        <div className='row mb-2'>
          <div className='col-4'>
            <h5>Comments</h5>
          </div>
          <div className='col-8'>
            <ul className='nav nav-pills justify-content-end'>
              <li className='nav-item'>
                <CreateButton tooltip='Create a new comment' />
              </li>
            </ul>
          </div>
        </div>
        {post.comments && post.comments.length > 0
          ? post.comments.map(comment => <CommentCard key={comment.id} comment={comment} />)
          : <h5 className='text text-secondary'>There are no comments on this post yet! :(</h5>}
      </div>}
  </div>
);

export default Post;