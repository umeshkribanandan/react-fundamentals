import * as actionTypes from "./actionTypes";

export const saveResult = (value) => {
  return {
    type: actionTypes.STORE_RESULT,
    payload: value,
  };
};
export const storeResult = (value) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(value));
    }, 2000);
  };
};

export const deleteResult = () => {
  return {
    type: actionTypes.DELETE_RESULT,
  };
};
