import React, { Component } from "react";
import Routes from "./Route";
import axios from "axios";
import { Route, Switch, BrowserRouter } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.deleteNotification = this.deleteNotification.bind(this);
    this.deleteNews = this.deleteNews.bind(this);
    this.deleteSlider = this.deleteSlider.bind(this);
    this.state = {
      users: [],
      events: [],
      notifications: [],
      news: [],
      sliders: [],
    };
  }

  componentDidMount() {
    this.getUserDataFromDatabase();
    this.getEventDataFromDatabase();
    this.getNotificationDataFromDatabase();
    this.getNewsDataFromDatabase();
    this.getSliderDataFromDatabase();
  }

  getUserDataFromDatabase() {
    axios
      .get("https://mkonuk-intern-site.herokuapp.com/admin/users/")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getEventDataFromDatabase() {
    axios
      .get("https://mkonuk-intern-site.herokuapp.com/admin/events/")
      .then((response) => {
        this.setState({ events: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getNotificationDataFromDatabase() {
    axios
      .get("https://mkonuk-intern-site.herokuapp.com/admin/notifications/")
      .then((response) => {
        this.setState({ notifications: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getNewsDataFromDatabase() {
    axios
      .get("https://mkonuk-intern-site.herokuapp.com/admin/news/")
      .then((response) => {
        this.setState({ news: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getSliderDataFromDatabase() {
    axios
      .get("https://mkonuk-intern-site.herokuapp.com/admin/sliders/")
      .then((response) => {
        this.setState({ slider: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteUser(id) {
    axios
      .delete("https://mkonuk-intern-site.herokuapp.com/admin/users/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      users: this.state.users.filter((el) => el._id !== id),
    });
  }

  deleteEvent(id) {
    axios
      .delete("https://mkonuk-intern-site.herokuapp.com/admin/events/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      events: this.state.events.filter((el) => el._id !== id),
    });
  }

  deleteNotification(id) {
    axios
      .delete(
        "https://mkonuk-intern-site.herokuapp.com/admin/notifications/" + id
      )
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      notifications: this.state.notifications.filter((el) => el._id !== id),
    });
  }

  deleteNews(id) {
    axios
      .delete("https://mkonuk-intern-site.herokuapp.com/admin/news/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      news: this.state.news.filter((el) => el._id !== id),
    });
  }

  deleteSlider(id) {
    axios
      .delete("https://mkonuk-intern-site.herokuapp.com/admin/sliders/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      sliders: this.state.sliders.filter((el) => el._id !== id),
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              render={(props) => (
                <Routes
                  {...props}
                  users={this.state.users}
                  events={this.state.events}
                  notifications={this.state.notifications}
                  news={this.state.news}
                  sliders={this.state.sliders}
                  getUserDataFromDatabase={this.getUserDataFromDatabase}
                  getEventDataFromDatabase={this.getEventDataFromDatabase}
                  getNotificationDataFromDatabase={
                    this.getNotificationDataFromDatabase
                  }
                  getNewsDataFromDatabase={this.getNewsDataFromDatabase}
                  getSliderDataFromDatabase={this.getSliderDataFromDatabase}
                  deleteUser={this.deleteUser}
                  deleteEvent={this.deleteEvent}
                  deleteNotification={this.deleteNotification}
                  deleteNews={this.deleteNews}
                  deleteSlider={this.deleteSlider}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
