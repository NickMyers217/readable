import {
  ON_FIELD_CHANGE,
  CLEAR_FORM,
  START_SEND_POST,
  FINISH_SEND_POST,
  FINISH_SEND_POST_ERROR
} from '../actions';

const initialState = {
  title: '',
  body: '',
  author: '',
  category: '',
  isSending: false,
  isError: false
};

const postFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_FIELD_CHANGE:
      return {
        ...state,
        [action.field]: action.value
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
    case CLEAR_FORM:
      return {
        ...state,
        title: '',
        body: '',
        category: '',
        author: ''
      };
    default:
      return state;
  }
};

export default postFormReducer;