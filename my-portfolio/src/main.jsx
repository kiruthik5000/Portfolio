import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Topbar from "./components/Topbar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Topbar />
    <App />
  </React.StrictMode>
);
