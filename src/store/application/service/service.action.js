import sitterApi from '../../../api/sitterApi';

export const SERVICE_ACTION = {
  GET_ALL: 'SERVICE_GET_ALL',
  GET_BY_ID: 'SERVICE_GET_BY_ID',
  UPDATE: 'SERVICE_UPDATE',
  ADD: 'SERVICE_ADD',
  GET_CATEGORIES: 'SERVICE_GET_CATEGORIES',
  CHANGE_STATUS: 'SERVICE_CHANGE_STATUS',
};

export const getAllService = () => {
  return async (dispatch) => {
    const { data } = await sitterApi.getAllService();
    dispatch({
      type: SERVICE_ACTION.GET_ALL,
      payload: data,
    });
  };
};

export const getServiceById = (id) => {
  return async (dispatch) => {
    const { data } = await sitterApi.getServiceById(id);
    dispatch({
      type: SERVICE_ACTION.GET_BY_ID,
      payload: data,
    });
  };
};

export const updateService = (values) => {
  return async (dispatch) => {
    const { data } = await sitterApi.updateService(values);
    dispatch({
      type: SERVICE_ACTION.UPDATE,
      payload: data,
    });
  };
};

export const addService = (values) => {
  return async (dispatch) => {
    const { data } = await sitterApi.addService(values);
    dispatch({
      type: SERVICE_ACTION.ADD,
      payload: data,
    });
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    const { data } = await sitterApi.getCategories();
    dispatch({
      type: SERVICE_ACTION.GET_CATEGORIES,
      payload: data,
    });
  };
};
export const changeStatusService = (id, isActived) => {
  return async (dispatch) => {
    if (isActived) {
      const { data } = await sitterApi.deactiveService(id);
      dispatch({
        type: SERVICE_ACTION.CHANGE_STATUS,
        payload: data,
      });
    } else {
      const { data } = await sitterApi.activeService(id);
      dispatch({
        type: SERVICE_ACTION.CHANGE_STATUS,
        payload: data,
      });
    }
  };
};
