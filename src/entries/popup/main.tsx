import React from "react";
import ReactDOM from "react-dom/client";
import "../../index.css";
import "../enableDevHmr";
import App from "./App";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
