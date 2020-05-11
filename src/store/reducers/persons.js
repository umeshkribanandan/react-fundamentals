import * as actionTypes from "../action";

const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(),
        name: "Max",
        age: Math.floor(Math.random() * 40),
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson),
      };
    case actionTypes.DELETE_PERSON:
      let updatedPerson = state.persons.filter(
        (person) => person.id !== action.payload
      );
      return {
        ...state,
        persons: updatedPerson,
      };
    default:
      return state;
  }
};

export default reducer;
