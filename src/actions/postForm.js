import * as api from '../api';
import Post from '../models';

export const ON_FIELD_CHANGE = 'ON_FIELD_CHANGE';
export const START_SEND_POST = 'START_SEND_POST';
export const FINISH_SEND_POST = 'FINISH_SEND_POST';
export const FINISH_SEND_POST_ERROR = 'FINISH_SEND_POST_ERROR';
export const SET_FORM_MODE = 'SET_FORM_MODE';
export const CLEAR_FORM = 'CLEAR_FORM';
export const POPULATE_FORM = 'POPULATE_FORM';

export const onFieldChange = (field, value) => ({
  type: ON_FIELD_CHANGE,
  field,
  value
});

export const clearForm = () => ({
  type: CLEAR_FORM
});

export const setFormMode = mode => ({
  type: SET_FORM_MODE,
  mode
});

export const populateForm = post => ({
  type: POPULATE_FORM,
  post
});

export const startSendPost = () => ({
  type: START_SEND_POST
});

export const finishSendPost = response => ({
  type: FINISH_SEND_POST,
  result: response,
  finishedAt: Date.now()
});

export const finishSendPostError = err => ({
  type: FINISH_SEND_POST_ERROR,
  error: err,
  erroredAt: Date.now()
});

export const addNewPost = (title, body, author, category) => dispatch => {
  const post = new Post(title, body, author, category);

  dispatch(startSendPost());
  return api.addNewPost(post)
    .then(res => res.json())
    .then(json => dispatch(finishSendPost(json)))
    .catch(err => dispatch(finishSendPostError(err)));
};

export const editPost = (id, title, body) => dispatch => {
  dispatch(startSendPost());
  return api.editPost(id, title, body)
    .then(res => res.json())
    .then(json => dispatch(finishSendPost(json)))
    .catch(err => dispatch(finishSendPostError(err)));
};