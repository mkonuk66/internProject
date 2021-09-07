import React, { Component } from "react";
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect,
  useLocation,
} from "react-router-dom";
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
import AdminEditUser from "./Components/Admin/AdminEditUser";

const PrivateRoute = (props) => {
  const location = useLocation();
  const isAuthenticated = true;
  return isAuthenticated ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/admin",
        state: { from: location },
      }}
    />
  );
};

export default class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/notice" component={Notice} />
            <Route path="/event" component={Events} />
            <Route path="/news" component={News} />
            <Route path="/admin" component={AdminLogin} />
            <PrivateRoute path="/adminDashboard" component={Dashboard} />
            <PrivateRoute path="/adminNotice" component={AdminNotices} />
            <PrivateRoute path="/adminEvent" component={AdminEvents} />
            <PrivateRoute path="/adminNews" component={AdminNews} />
            <PrivateRoute path="/adminSlider" component={AdminSlider} />
            <PrivateRoute path="/adminUser" component={Admins} />
            <PrivateRoute path="/adminNoticeNew" component={AdminNewNotices} />
            <PrivateRoute path="/adminEventNew" component={AdminNewEvents} />
            <PrivateRoute path="/adminNewsNew" component={AdminNewNews} />
            <PrivateRoute path="/adminSliderNew" component={AdminNewSlider} />
            <PrivateRoute path="/adminUserNew" component={AdminNewUsers} />
            <PrivateRoute path="/adminUserEdit" component={AdminEditUser} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
