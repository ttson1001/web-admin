import sitterApi from '../../../api/sitterApi';

export const CUSTOMER_ACTION = {
  GET_ALL: 'CUSTOMER_GET_ALL',
  GET_BY_ID: 'CUSTOMER_GET_BY_ID',
};

export const getAllCustomer = () => {
  return async (dispatch) => {
    const { data } = await sitterApi.getAllCustomer();
    dispatch({
      type: CUSTOMER_ACTION.GET_ALL,
      payload: data,
    });
  };
};

export const getCustomerById = (id) => {
  return async (dispatch) => {
    const { data } = await sitterApi.getCustomerById(id);
    dispatch({
      type: CUSTOMER_ACTION.GET_BY_ID,
      payload: data,
    });
  };
};
