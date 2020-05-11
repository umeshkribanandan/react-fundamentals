import { STORE_RESULT, DELETE_RESULT } from "../actions/actionTypes";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_RESULT:
      return {
        ...state,
        results: state.results.concat(action.payload),
      };
    case DELETE_RESULT:
      let temResults = [...state.results];
      temResults.splice(action.payload, 1);
      return {
        ...state,
        results: temResults,
      };
    default:
      return state;
  }
};

export default reducer;
