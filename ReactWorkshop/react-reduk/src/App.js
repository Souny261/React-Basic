// Connect data on Redux State
import { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import UserComponent from "./component/User";
import { useEffect } from "react";
// 1.
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <UserComponent username={this.props.user.name} />
//       </div>
//     );
//   }
// }
// 2.
function App(props) {
  return (
    <div className="App">
      <UserComponent username={props.user.name} />
      <button onClick={() => props.setName("Redux Set Name")}>
        ChangeName
      </button>
    </div>
  );
}

// Get data from redux provider
const mapStateToProps = (state) => {
  return {
    user: state.user, // state.user is reducer data on store (index.js)
    emp: state.emp, //// state.emp is reducer data on store (index.js)
  };
};

// set action on dispatch

const mapDispatchProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "setName",
        payload: name,
      });
    },
  };
};

const AppWithConnect = connect(mapStateToProps, mapDispatchProps)(App);
export default AppWithConnect;
