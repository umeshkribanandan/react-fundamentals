const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  let rState = state;
  console.log(action.type);
  switch (action.type) {
    case "INCREMENT":
      rState = {
        ...state,
        counter: state.counter + 1,
      };
      break;
    case "DECREMENT":
      rState = {
        ...state,
        counter: state.counter - 1,
      };
      break;
    default:
      rState = state;
      break;
  }
  return rState;
};

export default reducer;
