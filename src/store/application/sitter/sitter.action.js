import sitterApi from '../../../api/sitterApi';

export const SITTER_ACTION = {
  GET_ALL: 'SITTER_GET_ALL',
  GET_BY_ID: 'SITTER_GET_BY_ID',
  GET_FORM: 'SITTER_GET_FORM',
  DECIDED_FORM: 'SITTER_DECIDED_FORM',
};

export const getAllSitter = () => {
  return async (dispatch) => {
    const { data } = await sitterApi.getAllSitter();
    dispatch({
      type: SITTER_ACTION.GET_ALL,
      payload: data,
    });
  };
};
export const getSitterDetail = (id) => {
  return async (dispatch) => {
    const { data } = await sitterApi.getSitterDetail(id);
    dispatch({
      type: SITTER_ACTION.GET_BY_ID,
      payload: data,
    });
  };
};

export const getUpSalaryForm = (id) => {
  return async (dispatch) => {
    const { data } = await sitterApi.getUpSalaryForm(id);
    dispatch({
      type: SITTER_ACTION.GET_FORM,
      payload: data,
    });
  };
};
export const decidedForm = (id, isApproved) => {
  return async (dispatch) => {
    if (isApproved) {
      const { data } = await sitterApi.approveUpSalaryForm(id);
      dispatch({
        type: SITTER_ACTION.DECIDED_FORM,
        payload: data,
      });
    } else {
      const { data } = await sitterApi.rejectUpSalaryForm(id);
      dispatch({
        type: SITTER_ACTION.DECIDED_FORM,
        payload: data,
      });
    }
  };
};
