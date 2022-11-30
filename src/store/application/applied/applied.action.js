import sitterApi from '../../../api/sitterApi';

export const APPLIED_ACTION = {
  GET_ALL: 'APPLIED_GET_ALL',
  APPROVE: 'APPLIED_APPROVE',
  GET_BY_ID: 'APPLIED_GET_BY_ID',
};

export const getAllApplied = () => {
  return async (dispatch) => {
    const { data } = await sitterApi.getAllApplied();
    dispatch({
      type: APPLIED_ACTION.GET_ALL,
      payload: data,
    });
  };
};

export const approveApplied = (email) => {
  return async (dispatch) => {
    const { data } = await sitterApi.approveApplied(email);
    dispatch({
      type: APPLIED_ACTION.APPROVE,
      payload: data,
    });
  };
};

export const rejectApplied = (email) => {
  return async (dispatch) => {
    const { data } = await sitterApi.rejectApplied(email);
    dispatch({
      type: APPLIED_ACTION.APPROVE,
      payload: data,
    });
  };
};

export const getAppliedFormById = (id) => {
  return async (dispatch) => {
    const { data } = await sitterApi.getCandidateById(id);
    dispatch({
      type: APPLIED_ACTION.GET_BY_ID,
      payload: data,
    });
  };
};
