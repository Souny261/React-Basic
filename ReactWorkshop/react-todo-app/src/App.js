import "./App.css";
import FormComponent from "./component/form";
import TodoListComponent from "./component/todo_list_component";
import { connect } from "react-redux";
import MapStateToProps from "./Redux/data/MapStateToProps";
import MapDispatchProps from "./Redux/action/MapDispatchProps";
function App(props) {
  return (
    <div className="App">
      <FormComponent />
      <TodoListComponent />
      <hr />
      <h1>{props.counter.counter}</h1>
      <button onClick={() => props.count(1, "ADD")}>ADD</button>
      <button onClick={() => props.count(1, "SUB")}>SUB</button>
    </div>
  );
}

const AppWithConnect = connect(MapStateToProps, MapDispatchProps)(App);
export default AppWithConnect;
