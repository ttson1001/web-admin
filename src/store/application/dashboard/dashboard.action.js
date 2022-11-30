import sitterApi from '../../../api/sitterApi';

export const DASHBOARD_ACTION = {
  GET_BOOKING: 'DASHBOARD_GET_BOOKING',
};

export const getDashboardBooking = (start, end) => {
  return async (dispatch) => {
    const response = await Promise.all([
      sitterApi.getBookingRevenue(start, end),
      sitterApi.getNumOfBooking(start, end),
    ]);
    const { data: revenueBooking } = response[0];
    const { data: numOfBooking } = response[1];

    dispatch({
      type: DASHBOARD_ACTION.GET_BOOKING,
      payload: { revenueBooking, numOfBooking },
    });
  };
};
