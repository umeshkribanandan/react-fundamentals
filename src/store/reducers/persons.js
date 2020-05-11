import { ADD_PERSON, DELETE_PERSON } from "../actions/actionTypes";

const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      const newPerson = {
        id: Math.random(),
        name: "Max",
        age: Math.floor(Math.random() * 40),
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson),
      };
    case DELETE_PERSON:
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
