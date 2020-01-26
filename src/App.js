import React, { Fragment } from "react";
import "./styles.css";
import NavHeader from "./Components/NavHeader";
import Home from "./Pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import routes from "./routes/routes";
import PostPage from "./Pages/PostPage/PostPage";

export default function App() {
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
      </Switch>
    </Fragment>
  );
}
