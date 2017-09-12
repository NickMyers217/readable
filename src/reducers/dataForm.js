import {
  ON_FIELD_CHANGE,
  SET_FORM_MODE,
  CLEAR_FORM,
  POPULATE_FORM,
  START_SEND_DATA,
  FINISH_SEND_DATA,
  FINISH_SEND_DATA_ERROR,
  FORM_MODES
} from '../actions';

const initialState = {
  data: {
    title: '',
    body: '',
    author: '',
    category: ''
  },
  formMode: FORM_MODES.CREATE_POST,
  fieldFormModeRules: {
    title: [ FORM_MODES.CREATE_POST, FORM_MODES.EDIT_POST ],
    body: Object.keys(FORM_MODES).map(mode => FORM_MODES[mode]),
    author: [ FORM_MODES.CREATE_POST, FORM_MODES.CREATE_COMMENT ],
    category: [ FORM_MODES.CREATE_POST ]
  },
  isSending: false,
  isError: false
};

const dataFormReducer = (state=initialState, action) => {
  switch (action.type) {
    case ON_FIELD_CHANGE:
      return {
        ...state,
        data: { ...state.data, [action.field]: action.value }
      };
    case SET_FORM_MODE:
      return {
        ...state,
        formMode: action.mode
      };
    case CLEAR_FORM:
      return {
        ...state,
        data: { title: '', body: '', category: '', author: '' }
      };
    case POPULATE_FORM:
      return {
        ...state,
        data: action.data
      };
    case START_SEND_DATA:
      return {
        ...state,
        isSending: true,
        isError: false
      };
    case FINISH_SEND_DATA:
      return {
        ...state,
        isSending: false,
        isError: false,
        result: action.result,
        finishedAt: action.finishedAt
      };
    case FINISH_SEND_DATA_ERROR:
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

export default dataFormReducer;