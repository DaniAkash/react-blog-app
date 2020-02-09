import React, { Fragment, useEffect } from "react";
import "./styles.css";
import NavHeader from "./Components/NavHeader";
import Home from "./Pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import routes from "./routes/routes";
import PostPage from "./Pages/PostPage/PostPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import networkRequests from "./services/networkRequests";

export default function App() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === "/") {
      history.replace("/home");
    }
    networkRequests("/admin/isLoggedIn")
      .then(console.log)
      .catch(console.error);
  }, []);

  return (
    <Fragment>
      <NavHeader />
      <Switch>
        <Route path={routes.home}>
          <Home />
        </Route>
        <Route path={routes.post}>
          <PostPage/>
        </Route>
        <Route path={routes.adminLogin}>
          <LoginPage/>
        </Route>
      </Switch>
    </Fragment>
  );
}
