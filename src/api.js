import * as config from './config';

const headers = {
  'Authorization': 'thisisatest'
};

const buildUrl = path => {
  return `${config.serverUrl}${path}`;
};

export const fetchAllPosts = (category=null) => {
  const path = category !== null ? `/${category}/posts` : '/posts';
  const endpoint = buildUrl(path);
  return fetch(endpoint, { headers });
};

export const fetchAllCategories = () => {
  const endpoint = buildUrl('/categories');
  return fetch(endpoint, { headers });
};

export const fetchPost = postId => {
  const endpoint = buildUrl(`/posts/${postId}`);
  return fetch(endpoint, { headers });
};

export const fetchPostComments = postId => {
  const endpoint = buildUrl(`/posts/${postId}/comments`);
  return fetch(endpoint, { headers });
};

export const addNewPost = post => {
  const endpoint = buildUrl('/posts');
  return fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: { ...headers, 'Content-Type': 'application/json' }
  });
};

export const deletePost = post => {
  const endpoint = buildUrl(`/posts/${post.id}`);
  return fetch(endpoint, {
    method: 'DELETE',
    headers
  });
};

export const editPost = (id, title, body) => {
  const endpoint = buildUrl(`/posts/${id}`);
  return fetch(endpoint, {
    method: 'PUT',
    body: JSON.stringify({ title, body }),
    headers: { ...headers, 'Content-Type': 'application/json' }
  });
};

export const votePost = (postId, isUpvote) => {
  const endpoint = buildUrl(`/posts/${postId}`);
  return fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify({
      option: isUpvote ? 'upVote' : 'downVote'
    }),
    headers: { ...headers, 'Content-Type': 'application/json' }
  });
};

export const addNewComment = comment => {
  const endpoint = buildUrl('/comments');
  return fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: { ...headers, 'Content-Type': 'application/json' }
  });
};

export const deleteComment = comment => {
  const endpoint = buildUrl(`/comments/${comment.id}`);
  return fetch(endpoint, {
    method: 'DELETE',
    headers
  });
};

export const editComment = (id, body) => {
  const endpoint = buildUrl(`/comments/${id}`);
  return fetch(endpoint, {
    method: 'PUT',
    body: JSON.stringify({ body, timestamp: Date.now() }),
    headers: { ...headers, 'Content-Type': 'application/json' }
  });
};

export const voteComment = (commentId, isUpvote) => {
  const endpoint = buildUrl(`/comments/${commentId}`);
  return fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify({
      option: isUpvote ? 'upVote' : 'downVote'
    }),
    headers: { ...headers, 'Content-Type': 'application/json' }
  });
};
