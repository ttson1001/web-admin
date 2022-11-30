import { DASHBOARD_ACTION } from './dashboard.action';

const initState = {
  numOfBooking: 0,
  revenueBooking: 0,
};

//
const customerReducer = (state = initState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case DASHBOARD_ACTION.GET_BOOKING:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default customerReducer;
