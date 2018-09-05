const counterReducerDefaultState = {
    counter: 0
}

const countReducer = (state = counterReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        counter: state.counter + action.incrementBy
      };
    case "DECREASE":
      return {
        counter: state.counter - action.decrementBy
      };
    case "SET":
      return {
        counter: action.counter
      };
    case "RESET":
      return {
        counter: 0
      };
    default:
      return state;
  }
};

export default countReducer;
