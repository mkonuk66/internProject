import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
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
import Admins from "./Components/Admin/AdminUsers";
import AdminNewSlider from "./Components/Admin/AdminNewSlider";
import AdminNewNews from "./Components/Admin/AdminNewNews";
import AdminNewNotices from "./Components/Admin/AdminNewNotice";
import AdminNewEvents from "./Components/Admin/AdminNewEvents";
import AdminNewUsers from "./Components/Admin/AdminNewUsers";

export default class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <BrowserRouter>
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
            <Route path="/adminNewNotice" component={AdminNewNotices} />
            <Route path="/adminNewEvent" component={AdminNewEvents} />
            <Route path="/adminNewNews" component={AdminNewNews} />
            <Route path="/adminNewSlider" component={AdminNewSlider} />
            <Route path="/adminNewUser" component={AdminNewUsers} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
