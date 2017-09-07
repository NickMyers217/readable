import React from 'react';
import { Link } from 'react-router-dom';
import * as moment from 'moment';

import { EditButton, DeleteButton } from './Buttons';
import Card from './Card';
import Voter from './Voter';

const CommentCard = ({ comment }) => (
  <Card
    bodyText={comment.body}
    footer={`Submitted by ${comment.author} at ${moment(comment.timestamp).format('MMMM Do YYYY, h:mm:ss a')}`}>
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
    footer={moment(post.timestamp).format('MMMM Do YYYY, h:mm:ss a')}>
      <Voter score={post.voteScore} />
      <h6 className='mb-2 text-muted'>
        {post.comments.length} comments
      </h6>
      <EditButton tooltip='Edit this post' />
      <DeleteButton tooltip='Delete this post' />
  </Card>
);

// TODO: Make an add button for a comment
const Post = ({ post, summarizeBody=false, showComments=false }) => (
  <div>
    <PostCard post={post} summarizeBody={summarizeBody} />
    {showComments &&
      <div>
        <h5 className='mt-4'>Comments</h5>
        {post.comments && post.comments.length > 0
          ? post.comments.map(comment => <CommentCard key={comment.id} comment={comment} />)
          : <h5 className='text text-secondary'>There are no comments on this post yet! :(</h5>}
      </div>}
  </div>
);

export default Post;