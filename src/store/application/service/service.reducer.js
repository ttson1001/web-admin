const { SERVICE_ACTION } = require('./service.action');

const initState = {
  services: [],
  service: {},
  categories: [],
};

//
const serviceReducer = (state = initState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case SERVICE_ACTION.GET_ALL:
      return {
        ...state,
        services: payload,
      };
    case SERVICE_ACTION.GET_BY_ID:
      return {
        ...state,
        service: payload,
      };
    case SERVICE_ACTION.GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case SERVICE_ACTION.ADD:
      return {
        ...state,
        services: [...state.services, payload],
      };
    case SERVICE_ACTION.CHANGE_STATUS:
      return {
        ...state,
        services: state.services.map((el) => (el.id === payload.id ? payload : el)),
      };
    default:
      return state;
  }
};

export default serviceReducer;
