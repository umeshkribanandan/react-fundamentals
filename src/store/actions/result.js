import * as actionTypes from "./actionTypes";

export const saveResult = (value) => {
  return {
    type: actionTypes.STORE_RESULT,
    payload: value,
  };
};
export const storeResult = (value) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      console.log(getState().ctr.counter);
      dispatch(saveResult(value));
    }, 2000);
  };
};

export const deleteResult = () => {
  return {
    type: actionTypes.DELETE_RESULT,
  };
};
