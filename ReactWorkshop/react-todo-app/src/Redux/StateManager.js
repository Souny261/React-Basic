import { createStore, combineReducers } from "redux";
import ReducerCounter from "./reducer/ReducerCounter";
import ReducerTodo from "./reducer/ReducerTodo";
const store = createStore(
  combineReducers({ counter: ReducerCounter, todos: ReducerTodo })
);
export default store;
