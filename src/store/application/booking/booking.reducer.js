import { BOOKING_ACTION } from './booking.action';

const initState = {
  booking: [],
  bookingDetail: {},
};

//
const bookingReducer = (state = initState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case BOOKING_ACTION.GET_ALL:
      return {
        ...state,
        booking: payload,
      };
    case BOOKING_ACTION.GET_ID_BY_ADMIN:
      return {
        ...state,
        bookingDetail: payload,
      };

    default:
      return state;
  }
};

export default bookingReducer;
