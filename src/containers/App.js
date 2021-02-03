import React, { Component } from "react";
import { Route, Switch, Router, BrowserRouter } from "react-router-dom";
import Layout from "../hos/Layout/Layout";
import Home from "./Home/Home";
import Category from "./Category/Category";


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
