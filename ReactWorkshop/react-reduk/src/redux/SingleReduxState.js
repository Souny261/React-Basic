import { createStore } from "redux";

const SingleReduxState = () => {
  // 1. Single State
  // ຂະບວນການປ່ຽນແປງ State
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        state += action.payload;
        break;
      case "SUB":
        state -= action.payload;
        break;
    }
    return state;
  };
  // create redux store
  const store = createStore(reducer, 1); // 1 is starting value
  store.subscribe(() => {
    //get data from redux state
    console.log("New data: " + store.getState());
  });
  //   Update data
  store.dispatch({
    type: "ADD",
    payload: 500,
  });
  //   Update data
  store.dispatch({
    type: "SUB",
    payload: 500,
  });
  // ----------Single State----------
  return (
    <div>
      <h1>Single Redux State</h1>
    </div>
  );
};

export default SingleReduxState;
