import * as api from '../api';
import Post from '../models';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECIEVE_POSTS = 'RECIEVE_POSTS';
export const REQUEST_POSTS_ERROR = 'REQUEST_POSTS_ERROR';
export const UPDATE_CATEGORY_AND_TITLE = 'UPDATE_CATEGORY_AND_TITLE';
export const APPLY_NEW_SORTING = 'APPLY_NEW_SORTING';
export const START_SEND_POST = 'START_SEND_POST';
export const FINISH_SEND_POST = 'FINISH_SEND_POST';
export const FINISH_SEND_POST_ERROR = 'FINISH_SEND_POST_ERROR';

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

export const addNewPost = () => dispatch => {
};