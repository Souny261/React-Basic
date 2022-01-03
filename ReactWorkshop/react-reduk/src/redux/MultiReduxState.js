import { createStore } from "redux";

const MultiReduxState = () => {
  // 1. Multi State
  //   create data
  const initialState = {
    result: 0,
    value: [],
  };

  // mange action and state
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD":
        state = {
          result: (state.result += action.payload),
          value: [...state.value, action.payload],
        };
        // state += action.payload;
        break;
      case "SUB":
        // state -= action.payload;
        break;
    }
    return state;
  };
  // create redux store
  const store = createStore(reducer); // 1 is starting value
  store.subscribe(() => {
    //get data from redux state
    console.log("New data: " + store.getState().result);
    // store.getState().value.map((e) => {
    //   console.log(e);
    // });
    console.log("value: " + store.getState().value.length);
  });
  //   Update data
  store.dispatch({
    type: "ADD",
    payload: 1,
  });
  store.dispatch({
    type: "ADD",
    payload: 2,
  });
  store.dispatch({
    type: "ADD",
    payload: 3,
  });
  store.dispatch({
    type: "ADD",
    payload: 4,
  });

  return (
    <div>
      <h1>Multi Redux State</h1>
    </div>
  );
};

export default MultiReduxState;
