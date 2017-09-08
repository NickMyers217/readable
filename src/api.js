import * as config from './config';

const headers = {
  headers: { 'Authorization': 'thisisatest' }
};

const buildUrl = path => {
  return `${config.serverUrl}${path}`;
};

export const fetchAllPosts = (category=null) => {
  const path = category !== null ? `/${category}/posts` : '/posts';
  const endpoint = buildUrl(path);
  return fetch(endpoint, headers);
};

export const fetchAllCategories = () => {
  const endpoint = buildUrl('/categories');
  return fetch(endpoint, headers);
};

export const fetchPost = postId => {
  const endpoint = buildUrl(`/posts/${postId}`);
  return fetch(endpoint, headers);
};

export const fetchPostComments = postId => {
  const endpoint = buildUrl(`/posts/${postId}/comments`);
  return fetch(endpoint, headers);
};