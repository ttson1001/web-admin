import { APPLIED_ACTION } from './applied.action';

const initState = {
  appliedForm: [],
  candidate: {},
};

//
const appliedReducer = (state = initState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case APPLIED_ACTION.GET_ALL:
      return {
        ...state,
        appliedForm: payload,
      };
    case APPLIED_ACTION.APPROVE:
      return {
        ...state,
        appliedForm: state.appliedForm.filter((el) => el.id !== payload.id),
      };
    case APPLIED_ACTION.GET_BY_ID:
      return {
        ...state,
        candidate: payload,
      };
    default:
      return state;
  }
};

export default appliedReducer;
