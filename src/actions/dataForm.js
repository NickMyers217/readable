import * as api from '../api';
import { Post, Comment } from '../models';

export const ON_FIELD_CHANGE = 'ON_FIELD_CHANGE';
export const START_SEND_DATA = 'START_SEND_POST';
export const FINISH_SEND_DATA = 'FINISH_SEND_POST';
export const FINISH_SEND_DATA_ERROR = 'FINISH_SEND_POST_ERROR';
export const SET_FORM_MODE = 'SET_FORM_MODE';
export const CLEAR_FORM = 'CLEAR_FORM';
export const POPULATE_FORM = 'POPULATE_FORM';

export const FORM_MODES = {
  CREATE_POST: 'CREATE_POST',
  EDIT_POST: 'EDIT_POST',
  CREATE_COMMENT: 'CREATE_COMMENT',
  EDIT_COMMENT: 'EDIT_COMMENT'
};

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
  mode: FORM_MODES[mode]
});

export const populateForm = data => ({
  type: POPULATE_FORM,
  data
});

export const startSendData = () => ({
  type: START_SEND_DATA
});

export const finishSendData = response => ({
  type: FINISH_SEND_DATA,
  result: response,
  finishedAt: Date.now()
});

export const finishSendDataError = err => ({
  type: FINISH_SEND_DATA_ERROR,
  error: err,
  erroredAt: Date.now()
});

export const addNewPost = (title, body, author, category) => dispatch => {
  const post = new Post(title, body, author, category);

  dispatch(startSendData());
  return api.addNewPost(post)
    .then(res => res.json())
    .then(json => dispatch(finishSendData(json)))
    .catch(err => dispatch(finishSendDataError(err)));
};

export const editPost = (id, title, body) => dispatch => {
  dispatch(startSendData());
  return api.editPost(id, title, body)
    .then(res => res.json())
    .then(json => dispatch(finishSendData(json)))
    .catch(err => dispatch(finishSendDataError(err)));
};

export const addNewComment = (parentId, body, author) => dispatch => {
  const comment = new Comment(parentId, body, author);

  dispatch(startSendData());
  return api.addNewComment(comment)
    .then(res => res.json())
    .then(json => dispatch(finishSendData(json)))
    .catch(err => dispatch(finishSendDataError(err)));
};

export const editComment = (id, body) => dispatch => {
  dispatch(startSendData());
  return api.editComment(id, body)
    .then(res => res.json())
    .then(json => dispatch(finishSendData(json)))
    .catch(err => dispatch(finishSendDataError(err)));
};
