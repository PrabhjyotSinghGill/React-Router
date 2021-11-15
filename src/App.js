import React, { Component } from "react";
import {Route, Switch,Redirect} from 'react-router-dom';
import NavBar from "./components/navbar";
import Home from "./components/home";
import ProductDetails from "./components/productDetails";
import Products from "./components/products";
import Posts from "./components/posts";
import Dashboard from "./components/admin/dashboard";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products/:id" component={ProductDetails}></Route>
            <Route path="/products" exact render={props => <Products sortBy="newest" {...props}/>}></Route>
            <Route path="/posts/:year?/:month?" exact component={Posts}></Route>
            <Route path="/admin" exact component={Dashboard}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Route path="/" exact component={Home}></Route>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
