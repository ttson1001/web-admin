import sitterApi from '../../../api/sitterApi';

export const BOOKING_ACTION = {
  GET_ALL: 'BOOKING_GET_ALL',
  GET_ID_BY_ADMIN: 'BOOKING_GET_ID_BY_ADMIN',
};

export const getAllBooking = () => {
  return async (dispatch) => {
    const { data } = await sitterApi.getAllBooking();
    dispatch({
      type: BOOKING_ACTION.GET_ALL,
      payload: data,
    });
  };
};

export const getBookingById = (id) => {
  return async (dispatch) => {
    const { data } = await sitterApi.getBookingById(id);
    dispatch({
      type: BOOKING_ACTION.GET_ID_BY_ADMIN,
      payload: data,
    });
  };
};
