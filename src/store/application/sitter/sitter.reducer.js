import { SITTER_ACTION } from './sitter.action';

const initState = {
  sitters: [],
  sitter: {},
  sitterForm: {},
};

//
const sitterReducer = (state = initState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case SITTER_ACTION.GET_ALL:
      return {
        ...state,
        sitters: payload,
      };
    case SITTER_ACTION.GET_BY_ID:
      return {
        ...state,
        sitter: payload,
      };
    case SITTER_ACTION.GET_FORM:
      return {
        ...state,
        sitterForm: payload,
      };
    default:
      return state;
  }
};

export default sitterReducer;
