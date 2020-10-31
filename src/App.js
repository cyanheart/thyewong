import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home";
import NotFound from "./components/notFound";

function App() {
  return <Home/>
  // return (
  //   <React.Fragment>
  //     <HashRouter basename="/">
  //       <Switch>
  //         <Route path="/home" component={Home}></Route>
  //         <Route path="/not-found" component={NotFound}></Route>
  //         <Redirect from="/" to="/home" exact></Redirect>
  //         <Redirect to="/not-found"></Redirect>
  //       </Switch>
  //     </HashRouter>
  //   </React.Fragment>
  // );
}

export default App;
