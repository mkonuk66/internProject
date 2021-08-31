import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import NotFound from "./Components/NotFound";
import Notice from "./Components/AllNotice";
import Events from "./Components/AllEvents";
import News from "./Components/AllNews";
import Admin from "./Components/Admin/AdminLogin";
import Dashboard from "./Components/Admin/AdminDashboard";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/notice" component={Notice} />
          <Route path="/events" component={Events} />
          <Route path="/news" component={News} />
          <Route path="/admin" component={Admin} />
          <Route path="/adminDashboard" component={Dashboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
