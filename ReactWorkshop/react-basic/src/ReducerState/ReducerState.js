import { useReducer, useState } from "react";

function ReducerState() {
  const [count, setCount] = useState(0);
  // create function
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return state + action.payload;
      case "SUB":
        return state - action.payload;
      case "CLEAR":
        return 0;
    }
  };
  const [result, dispatch] = useReducer(reducer, count);

  return (
    <div align="center">
      <h1>{result}</h1>
      <button onClick={() => dispatch({ type: "ADD", payload: 10 })}>
        Add
      </button>
      <button onClick={() => dispatch({ type: "SUB", payload: 5 })}>
        Remove
      </button>
      <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
    </div>
  );
}

export default ReducerState;
