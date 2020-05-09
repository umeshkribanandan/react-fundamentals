const redux = require("redux");

const createStore = redux.createStore;

const initalState = {
  counter: 0,
};

//Reducer
const rootReducer = (state = initalState, action) => {
  let resturnState = state;
  switch (action.type) {
    case "INC_COUNTER":
      resturnState = {
        ...state,
        counter: state.counter + 1,
      };
      break;
    case "ADD_COUNTER":
      resturnState = {
        ...state,
        counter: state.counter + action.value,
      };
      break;
    default:
      resturnState = state;
      break;
  }
  return resturnState;
};

//Store
const store = createStore(rootReducer);
console.log(store.getState());

store.subscribe(() => {
  console.log("subscripton", store.getState());
});
//Dispatch Action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());

//Subscription
