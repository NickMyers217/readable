import {
  ON_FIELD_CHANGE,
  SET_FORM_MODE,
  CLEAR_FORM,
  POPULATE_FORM,
  START_SEND_POST,
  FINISH_SEND_POST,
  FINISH_SEND_POST_ERROR
} from '../actions';

const initialState = {
  formMode: 'create',
  title: '',
  body: '',
  author: '',
  category: '',
  isSending: false,
  isError: false
};

const postFormReducer = (state=initialState, action) => {
  switch (action.type) {
    case ON_FIELD_CHANGE:
      return {
        ...state,
        [action.field]: action.value
      };
    case SET_FORM_MODE:
      return {
        ...state,
        formMode: action.mode
      };
    case CLEAR_FORM:
      return {
        ...state,
        title: '',
        body: '',
        category: '',
        author: ''
      };
    case POPULATE_FORM:
      const { id, title, body, author, category } = action.post;
      return {
        ...state,
        id,
        title,
        body,
        author,
        category
      };
    case START_SEND_POST:
      return {
        ...state,
        isSending: true,
        isError: false
      };
    case FINISH_SEND_POST:
      return {
        ...state,
        isSending: false,
        isError: false,
        result: action.result,
        finishedAt: action.finishedAt
      };
    case FINISH_SEND_POST_ERROR:
      return {
        ...state,
        isSending: false,
        isError: true,
        error: action.error,
        erroredAt: action.erroredAt
      };
    default:
      return state;
  }
};

export default postFormReducer;