import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import ReducerState from "./ReducerState/ReducerState";
// import HelloExternalComponent from "./components/HelloExternalComponent";
import reportWebVitals from "./reportWebVitals";

// // Functional Component
// function HelloFunctionalComponet() {
//   return <h1>Hello Funcational Component</h1>;
// }

// // Class Component
// class HelloClassComponent extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello Class Component</h1>
//       </div>
//     );
//   }
// }

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
