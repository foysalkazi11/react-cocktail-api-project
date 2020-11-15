import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Content } from "./contextProvider/Content";

ReactDOM.render(
  <React.StrictMode>
    <Content>
      <App />
    </Content>
  </React.StrictMode>,
  document.getElementById("root")
);
