export const addCounter = ({ incrementBy = 1 } = {}) => ({
  type: "ADD",
  incrementBy
});

export const decreaseCounter = ({ decrementBy = 1 } = {}) => ({
  type: "DECREASE",
  decrementBy
});

export const setCounter = ({ counter }) => ({
  type: "SET",
  counter
});

export const resetCounter = () => ({
  type: "RESET"
});
