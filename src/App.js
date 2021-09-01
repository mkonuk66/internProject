import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import NotFound from "./Components/NotFound";
import Notice from "./Components/AllNotice";
import Events from "./Components/AllEvents";
import News from "./Components/AllNews";
import AdminLogin from "./Components/Admin/AdminLogin";
import Dashboard from "./Components/Admin/AdminDashboard";
import AdminSlider from "./Components/Admin/AdminSlider";
import AdminNews from "./Components/Admin/AdminNews";
import AdminNotices from "./Components/Admin/AdminNotice";
import AdminEvents from "./Components/Admin/AdminEvents";
import Admins from "./Components/Admin/Admin";

export default class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/notice" component={Notice} />
          <Route path="/events" component={Events} />
          <Route path="/news" component={News} />
          <Route path="/admin" component={AdminLogin} />
          <Route path="/adminDashboard" component={Dashboard} />
          <Route path="/adminNotice" component={AdminNotices} />
          <Route path="/adminEvent" component={AdminEvents} />
          <Route path="/adminNews" component={AdminNews} />
          <Route path="/adminSlider" component={AdminSlider} />
          <Route path="/adminUser" component={Admins} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}
