import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
// import AdminContext from "./context/AdminContext";
import AdminProvider from "./Store/AdminProvider";

/* 
* Use the following if only using context
<AdminContext.Provider value={{isLoggedIn: true}}>
  <Router>
    <App />
  </Router>
</AdminContext.Provider>,   
*/

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AdminProvider>
    <Router>
      <App />
    </Router>
  </AdminProvider>,
  rootElement
);
