import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

// STYLES
import "helpers/style/global.scss";

// COMPONENTS
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
