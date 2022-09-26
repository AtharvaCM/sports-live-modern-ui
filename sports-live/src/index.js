import React from "react";
import ReactDOM from "react-dom/client";

// react router
import { BrowserRouter } from "react-router-dom";

// styles
import "./index.css";

// router component
import Router from "./Router/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
