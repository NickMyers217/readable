import * as api from '../api';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECIEVE_POSTS = 'RECIEVE_POSTS';
export const REQUEST_POSTS_ERROR = 'REQUEST_POSTS_ERROR';
export const ADD_POST_TO_LIST = 'ADD_POST_TO_LIST';
export const DELETE_POST = 'DELETE_POST';
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

export const addPostToList = post => ({
  type: ADD_POST_TO_LIST,
  post: { ...post, comments: [] }
});

export const deletePost = postId => ({
  type: DELETE_POST,
  postId
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
  return api.fetchPostComments(post.id)
    .then(res => res.json())
    .then(comments => ({
      ...post,
      comments
    }));
};

export const fetchSinglePost = postId => dispatch => {
  dispatch(requestPosts());
  return api.fetchPost(postId)
    .then(res => res.json())
    .then(fetchPostCommentsAndAddToPost)
    .then(postWithComments => dispatch(recievePosts([postWithComments])))
    .catch(err => dispatch(requestPostsError(err)));
};

export const fetchAllPosts = category => dispatch => {
  dispatch(requestPosts());
  return api.fetchAllPosts(category)
    .then(res => res.json())
    .then(posts => {
      // Fetch the comments for each individual post and add them to the data
      const commentsPromises = posts.map(fetchPostCommentsAndAddToPost);
      return Promise.all(commentsPromises);
    })
    .then(postsWithComments => dispatch(recievePosts(postsWithComments)))
    .catch(err => dispatch(requestPostsError(err)));
};

export const deletePostServer = postId => dispatch => {
  return api.deletePost(postId)
    .then(() => dispatch(deletePost(postId)))
    .catch(console.log);
};