import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Features from "./pages/Features/Features";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/features" component={Features} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
