import React from "react";
import NavBar from "./components/navBar";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home";
import Products from "./components/products";
import NotFound from "./components/notFound";
import ContactUs from "./components/contactUs";

function App() {
  return (
    <React.Fragment>
      {/* <NavBar></NavBar> */}
      <Switch>
        <Route path="/products" component={Products}></Route>
        <Route path="/contact-us" component={ContactUs}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect from="/" to="/home" exact></Redirect>
        <Redirect to="/not-found"></Redirect>
      </Switch>
    </React.Fragment>
  );
}

export default App;
