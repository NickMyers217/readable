import * as api from '../api';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECIEVE_POSTS = 'RECIEVE_POSTS';
export const REQUEST_POSTS_ERROR = 'REQUEST_POSTS_ERROR';
export const UPDATE_CATEGORY_AND_TITLE = 'UPDATE_CATEGORY_AND_TITLE';
export const APPLY_NEW_SORTING = 'APPLY_NEW_SORTING';
export const ADD_POST_TO_LIST = 'ADD_POST_TO_LIST';
export const EDIT_POST_IN_LIST = 'EDIT_POST_IN_LIST';
export const DELETE_POST_IN_LIST = 'DELETE_POST_IN_LIST';
export const ADD_COMMENT_TO_LIST = 'ADD_COMMENT_TO_LIST';
export const EDIT_COMMENT_IN_LIST = 'EDIT_COMMENT_IN_LIST';
export const DELETE_COMMENT_IN_LIST = 'DELETE_COMMENT_IN_LIST';

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

export const addPostToList = post => ({
  type: ADD_POST_TO_LIST,
  post: { ...post, comments: [] }
});

export const editPostInList = post => ({
  type: EDIT_POST_IN_LIST,
  post: { ...post, comments: [] }
});

export const deletePostInList = post => ({
  type: DELETE_POST_IN_LIST,
  post
});

export const addCommentToList = comment => ({
  type: ADD_COMMENT_TO_LIST,
  comment
});

export const editCommentInList = comment => ({
  type: EDIT_COMMENT_IN_LIST,
  comment
});

export const deleteCommentInList = comment => ({
  type: DELETE_COMMENT_IN_LIST,
  comment
});

const fetchPostCommentsAndAddToPost = post => {
  return api.fetchPostComments(post.id)
    .then(res => res.json())
    .then(comments => ({ ...post, comments }));
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

export const deletePost = post => dispatch => {
  return api.deletePost(post)
    .then(() => dispatch(deletePostInList(post)))
    .catch(console.log);
};

export const deleteComment = comment => dispatch => {
  return api.deleteComment(comment)
    .then(() => dispatch(deleteCommentInList(comment)))
    .catch(console.log);
};

export const votePost = (post, isUpvote) => dispatch => {
  const voteScore = isUpvote ? post.voteScore + 1 : post.voteScore - 1;
  return api.votePost(post.id, isUpvote)
    .then(() => dispatch(editPostInList({ ...post, voteScore })))
    .catch(console.log);
};

export const voteComment = (comment, isUpvote) => dispatch => {
  const voteScore = isUpvote ? comment.voteScore + 1 : comment.voteScore - 1;
  return api.voteComment(comment.id, isUpvote)
    .then(() => dispatch(editCommentInList({ ...comment, voteScore })))
    .catch(console.log);
};