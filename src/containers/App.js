import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Layout from "../hos/Layout/Layout";
import Home from "./Home/Home";
import Category from "./Category/Category";
import Contact from "./ContactUS/ContactUS";


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/home"
              component={Home}
            />
            <Route
              exact
              path="/contact-us"
              component={Contact}
            />
            <Route
              exact
              path="/category/:id"
              component={Category}
            />
          </Layout>
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
