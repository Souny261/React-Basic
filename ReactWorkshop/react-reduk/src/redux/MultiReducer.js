import { createStore, combineReducers } from "redux";

const MultiReducer = () => {
  // Create variable
  const initialState = {
    salary: 0,
    value: [],
  };
  // Create action and State
  //   1
  const empReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD":
        state = {
          ...state,
          salary: (state.salary += action.payload),
          value: [...state.value, action.payload],
        };
        break;
      case "SUB":
        break;
    }
    return state;
  };

  //   2
  const userReducer = (state = { user: "Souny", age: 24 }, action) => {
    switch (action.type) {
      case "setName":
        state = {
          ...state,
          user: action.payload,
        };
        break;
      case "setAge":
        state = { ...state, age: action.payload };
        break;
    }
    return state;
  };

  const store = createStore(combineReducers({ empReducer, userReducer }));
  store.subscribe(() => {
    console.log("salary: " + store.getState().empReducer.salary);
    console.log("value: " + store.getState().empReducer.value);
    console.log("name: " + store.getState().userReducer.user);
    console.log("age: " + store.getState().userReducer.age);
  });
  store.dispatch({
    type: "ADD",
    payload: 500,
  });
  store.dispatch({
    type: "setName",
    payload: "Tia",
  });
  store.dispatch({
    type: "setAge",
    payload: 30,
  });

  return (
    <div>
      <h1>Multi Reducer</h1>
    </div>
  );
};

export default MultiReducer;
