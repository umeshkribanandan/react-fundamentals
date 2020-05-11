import * as actionTypes from "./actionTypes";

export const addPerson = () => {
  return {
    type: actionTypes.ADD_PERSON,
  };
};

export const deletePerson = (id) => {
  return {
    type: actionTypes.DELETE_PERSON,
    payload: id,
  };
};
