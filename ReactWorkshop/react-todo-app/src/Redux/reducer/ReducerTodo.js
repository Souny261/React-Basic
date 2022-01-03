const ReducerTodo = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "INSERT":
      state = {
        ...state,
        todos: [action.payload, ...state.todos],
      };
      break;
    default:
      break;
  }
  return state;
};

export default ReducerTodo;
