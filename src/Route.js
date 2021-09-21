import React, { Component } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import HomePage from "./Components/HomePage";
import NotFound from "./Components/NotFound";
import Notification from "./Components/AllNotification";
import Events from "./Components/AllEvents";
import EventDetail from "./Components/EventDetail";
import News from "./Components/AllNews";
import Coming from "./Components/ComingSoon";
import Contact from "./Components/Contact";
import AdminLogin from "./Components/Admin/AdminLogin";
import Dashboard from "./Components/Admin/AdminDashboard";
import AdminSlider from "./Components/Admin/AdminSlider";
import AdminNews from "./Components/Admin/AdminNews";
import AdminNotification from "./Components/Admin/AdminNotification";
import AdminEvents from "./Components/Admin/AdminEvents";
import Admins from "./Components/Admin/AdminUsers";
import AdminNewSlider from "./Components/Admin/AdminNewSlider";
import AdminNewNews from "./Components/Admin/AdminNewNews";
import AdminNewNotification from "./Components/Admin/AdminNewNotification";
import AdminNewEvents from "./Components/Admin/AdminNewEvents";
import AdminNewUsers from "./Components/Admin/AdminNewUsers";
import AdminEditUser from "./Components/Admin/AdminEditUser";
import AdminEditEvent from "./Components/Admin/AdminEditEvent";
import AdminEditNotification from "./Components/Admin/AdminEditNotification";
import NotificationDetail from "./Components/NotificationDetail";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import AdminEditNews from "./Components/Admin/AdminEditNews";

const PrivateRoute = (props1) => {
  const location = useLocation();
  let isAuthRoute = true;

  return isAuthRoute ? (
    <Route {...props1} />
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
          <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <Nav />
                <HomePage
                  {...props}
                  getNotificationDataFromDatabase={
                    this.props.getNotificationDataFromDatabase
                  }
                  notifications={this.props.notifications}
                  events={this.props.events}
                  getEventDataFromDatabase={this.props.getEventDataFromDatabase}
                />
                <Footer />
              </div>
            )}
          />{" "}
          <Route
            path="/eventDetail"
            render={(props) => (
              <div>
                <Nav />
                <EventDetail
                  {...props}
                  events={this.props.events}
                  getEventDataFromDatabase={this.props.getEventDataFromDatabase}
                />
                <Footer />
              </div>
            )}
          />
          <Route
            path="/notificationDetail/"
            render={(props) => (
              <div>
                <Nav />
                <NotificationDetail
                  {...props}
                  notifications={this.props.notifications}
                  getNotificationDataFromDatabase={
                    this.props.getNotificationDataFromDatabase
                  }
                />
                <Footer />
              </div>
            )}
          />
          <Route
            path="/notification"
            render={(props) => (
              <div>
                <Nav />
                <Notification
                  {...props}
                  notifications={this.props.notifications}
                  getNotificationDataFromDatabase={
                    this.props.getNotificationDataFromDatabase
                  }
                />
                <Footer />
              </div>
            )}
          />
          <Route
            path="/event"
            render={(props) => (
              <div>
                <Nav />
                <Events
                  {...props}
                  events={this.props.events}
                  getEventDataFromDatabase={this.props.getEventDataFromDatabase}
                />
                <Footer />
              </div>
            )}
          />
          <Route
            path="/news"
            render={() => (
              <div>
                <Nav />
                <News />
                <Footer />
              </div>
            )}
          />
          <Route
            path="/comingSoon"
            render={() => (
              <div>
                <Nav />
                <Coming />
                <Footer />
              </div>
            )}
          />
          <Route
            path="/contact"
            render={() => (
              <div>
                <Nav />
                <Contact />
                <Footer />
              </div>
            )}
          />
          <Route
            path="/admin"
            render={(props) => (
              <AdminLogin
                {...props}
                isAuth={this.props.isAuth}
                users={this.props.users}
                onChangeAuthState={this.props.onChangeAuthState}
                getUserDataFromDatabase={this.props.getUserDataFromDatabase}
              />
            )}
          />
          <PrivateRoute path="/adminDashboard" component={Dashboard} />
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
          <PrivateRoute path="/adminUserNew" component={AdminNewUsers} />
          <PrivateRoute path="/adminUserEdit" component={AdminEditUser} />
          <PrivateRoute
            path="/adminNotification"
            render={(props) => (
              <AdminNotification
                {...props}
                notifications={this.props.notifications}
                getNotificationDataFromDatabase={
                  this.props.getNotificationDataFromDatabase
                }
                deleteNotification={this.props.deleteNotification}
              />
            )}
          />
          <PrivateRoute
            path="/adminNotificationNew"
            component={AdminNewNotification}
          />
          <PrivateRoute
            path="/adminEditNotification/"
            component={AdminEditNotification}
          />
          <PrivateRoute
            path="/adminEvent"
            render={(props) => (
              <AdminEvents
                {...props}
                events={this.props.events}
                getEventDataFromDatabase={this.props.getEventDataFromDatabase}
                deleteEvent={this.props.deleteEvent}
              />
            )}
          />
          <PrivateRoute path="/adminEventNew" component={AdminNewEvents} />
          <PrivateRoute path="/adminEditEvent" component={AdminEditEvent} />
          <PrivateRoute
            path="/adminNews"
            render={(props) => (
              <AdminNews
                {...props}
                news={this.props.news}
                getNewsDataFromDatabase={this.props.getNewsDataFromDatabase}
                deleteNews={this.props.deleteNews}
              />
            )}
          />
          <PrivateRoute path="/adminNewsNew" component={AdminNewNews} />
          <PrivateRoute path="/adminEditNews" component={AdminEditNews} />
          <PrivateRoute path="/adminSlider" component={AdminSlider} />
          <PrivateRoute path="/adminSliderNew" component={AdminNewSlider} />
          <Route
            render={() => (
              <div>
                <Nav />
                <NotFound />
                <Footer />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}
