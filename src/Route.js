import React, { Component } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import HomePage from "./Components/HomePage";
import NotFound from "./Components/NotFound";
import Notice from "./Components/AllNotice";
import Events from "./Components/AllEvents";
import News from "./Components/AllNews";
import Coming from "./Components/ComingSoon";
import Contact from "./Components/Contact";
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
import AdminEditEvent from "./Components/Admin/AdminEditEvent";

const PrivateRoute = (props) => {
  const location = useLocation();
  const isAuthenticated1 = true;
  return isAuthenticated1 ? (
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
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/notice" component={Notice} />
          <Route path="/event" component={Events} />
          <Route path="/news" component={News} />
          <Route path="/comingSoon" component={Coming} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/admin"
            render={(props) => (
              <AdminLogin
                {...props}
                users={this.props.users}
                getUserDataFromDatabase={this.props.getUserDataFromDatabase}
              />
            )}
          />
          <PrivateRoute path="/adminDashboard" component={Dashboard} />
          <PrivateRoute path="/adminNotice" component={AdminNotices} />
          <PrivateRoute
            path="/adminEvent"
            render={(props) => (
              <AdminEvents
                {...props}
                event={this.props.event}
                getEventDataFromDatabase={this.props.getEventDataFromDatabase}
                deleteEvent={this.props.deleteEvent}
              />
            )}
          />
          <PrivateRoute path="/adminNews" component={AdminNews} />
          <PrivateRoute path="/adminSlider" component={AdminSlider} />
          <PrivateRoute
            path="/adminUser"
            render={(props) => (
              <Admins
                {...props}
                users={this.props.users}
                getUserDataFromDatabase={this.props.getUserDataFromDatabase}
                deleteUser={this.props.deleteUser}
              />
            )}
          />
          <PrivateRoute path="/adminNoticeNew" component={AdminNewNotices} />
          <PrivateRoute path="/adminEventNew" component={AdminNewEvents} />
          <PrivateRoute path="/adminNewsNew" component={AdminNewNews} />
          <PrivateRoute path="/adminSliderNew" component={AdminNewSlider} />
          <PrivateRoute path="/adminUserNew" component={AdminNewUsers} />
          <PrivateRoute path="/adminUserEdit" component={AdminEditUser} />
          <PrivateRoute path="/adminEditEvent" component={AdminEditEvent} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
