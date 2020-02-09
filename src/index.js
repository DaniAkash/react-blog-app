import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import AdminContext from "./context/AdminContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AdminContext.Provider value={{isLoggedIn: true}}>
    <Router>
      <App />
    </Router>
  </AdminContext.Provider>,
  rootElement
);
