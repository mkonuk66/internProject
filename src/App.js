import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
