export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECIEVE_POSTS = 'RECIEVE_POSTS';
export const REQUEST_POSTS_ERROR = 'REQUEST_POSTS_ERROR';
export const UPDATE_CATEGORY_AND_TITLE = 'UPDATE_CATEGORY_AND_TITLE';
export const APPLY_NEW_SORTING = 'APPLY_NEW_SORTING';

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

export const applyNewSorting = sorting => ({
  type: APPLY_NEW_SORTING,
  sorting
});

const fetchPostCommentsAndAddToPost = post => {
  const endpoint = `posts/${post.id}/comments`;
  const headers = {headers: {'Authorization': 'thisisatest'}};

  // TODO: Have some utility/config for url construction!
  return fetch(`http://localhost:5001/${endpoint}`, headers)
    .then(res => res.json())
    .then(comments => ({
      ...post,
      comments
    }));
};

export const fetchSinglePost = postId => dispatch => {
  const endpoint = `posts/${postId}`;
  const headers = {headers: {'Authorization': 'thisisatest'}};

  dispatch(requestPosts());
  // TODO: Have some utility/config for url construction!
  return fetch(`http://localhost:5001/${endpoint}`, headers)
    .then(res => res.json())
    .then(fetchPostCommentsAndAddToPost)
    .then(postWithComments => dispatch(recievePosts([postWithComments])))
    .catch(err => dispatch(requestPostsError(err)));
};

export const fetchAllPosts = category => dispatch => {
  const endpoint = category !== null ? `${category}/posts` : 'posts';
  const headers = {headers: {'Authorization': 'thisisatest'}};

  dispatch(requestPosts());
  // TODO: Have some utility/config for url construction!
  return fetch(`http://localhost:5001/${endpoint}`, headers)
    .then(res => res.json())
    .then(posts => {
      // Fetch the comments for each individual post and add them to the data
      const commentsPromises = posts.map(fetchPostCommentsAndAddToPost);
      return Promise.all(commentsPromises);
    })
    .then(postsWithComments => dispatch(recievePosts(postsWithComments)))
    .catch(err => dispatch(requestPostsError(err)));
};