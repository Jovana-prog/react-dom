import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//Koristimo JSX za pisanje, a ne HTML

// ReactDOM.render(
//   <div className="omotac">
//     <h1>Cao svima!</h1>
//     <p>Kako ste</p>
//   </div>,
//   document.getElementById("root")
// );

// const prom = <h1>Cao svima!</h1>;

// ReactDOM.render(
//   <div>
//     {prom}
//     <p>Kako ste</p>
//   </div>,
//   document.getElementById("root")
// );
