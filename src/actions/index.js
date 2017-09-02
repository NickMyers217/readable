/**
 * TODO: Look into how these action creators should dispatch to the server, and what data they accept back
 * Example: https://github.com/reactjs/redux/tree/master/examples/async/src/actions
 */ 

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECIEVE_POSTS = 'RECIEVE_POSTS';
export const REQUEST_POSTS_ERROR = 'REQUEST_POSTS_ERROR';

export const requestPosts = () => ({
  type: REQUEST_POSTS
});

export const recievePosts = posts => ({
  type: RECIEVE_POSTS,
  posts,
  recievedAt: Date.now()
});

export const requestPostsError = error => ({
  type: REQUEST_POSTS_ERROR,
  error,
  erroredAt: Date.now()
});

export const fetchAllPosts = () => dispatch => {
  dispatch(requestPosts());
  // TODO: Have some utility/config for url construction!
  return fetch('http://localhost:5001/posts', {headers: {'Authorization': 'thisisatest'}})
    .then(res => res.json())
    .then(json => dispatch(recievePosts(json)))
    .catch(err => dispatch(requestPostsError(err)));
};