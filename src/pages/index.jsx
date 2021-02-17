import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage/index";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

const Pages = () => (
  <>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
    </Switch>
  </>
);

export default Pages;
