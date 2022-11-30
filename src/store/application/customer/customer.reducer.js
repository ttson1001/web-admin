import { CUSTOMER_ACTION } from './customer.action';

const initState = {
  customers: [],
  customer: {},
};

//
const customerReducer = (state = initState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CUSTOMER_ACTION.GET_ALL:
      return {
        ...state,
        customers: payload,
      };
    case CUSTOMER_ACTION.GET_BY_ID:
      return {
        ...state,
        customer: payload,
      };
    default:
      return state;
  }
};

export default customerReducer;
