export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECIEVE_POSTS = 'RECIEVE_POSTS';
export const REQUEST_POSTS_ERROR = 'REQUEST_POSTS_ERROR';
export const UPDATE_CATEGORY_AND_TITLE = 'UPDATE_CATEGORY_AND_TITLE';

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

export const updateCategoryAndTitle = (category, title) => ({
  type: UPDATE_CATEGORY_AND_TITLE,
  category,
  title
});

export const fetchAllPosts = category => dispatch => {
  const endpoint = category !== null ? `${category}/posts` : 'posts';
  const headers = {headers: {'Authorization': 'thisisatest'}};

  dispatch(requestPosts());
  // TODO: Have some utility/config for url construction!
  return fetch(`http://localhost:5001/${endpoint}`, headers)
    .then(res => res.json())
    .then(json => dispatch(recievePosts(json)))
    .catch(err => dispatch(requestPostsError(err)));
};