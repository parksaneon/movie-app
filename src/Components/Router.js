import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/Home";
import Detail from "../Routes/Detail";
import TV from "../Routes/TV";
import Search from "../Routes/Search";

const Routes = () => (
  <Router>
    <>
      <Route path="/" exact component={Home} />
      <Route path="/" exact component={Detail} />
      <Route path="/" exact component={TV} />
      <Route path="/" exact component={Search} />
    </>
  </Router>
);

export default Routes;
