const ReducerCounter = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        counter: (state.counter += action.payload),
      };
      break;
    case "SUB":
      state = {
        ...state,
        counter: (state.counter -= action.payload),
      };
      break;
    default:
      break;
  }
  return state;
};

export default ReducerCounter;
