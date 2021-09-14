import React, { Component } from "react";
import Routes from "./Route";
import axios from "axios";
import { Route, Switch, BrowserRouter } from "react-router-dom";

let isAuth1 = "";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.state = { users: [], events: [] };
  }

  componentDidMount() {
    this.getUserDataFromDatabase();
    this.getEventDataFromDatabase();
  }

  getUserDataFromDatabase() {
    axios
      .get("https://mkonuk-intern-project.herokuapp.com/admin/users/")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getEventDataFromDatabase() {
    axios
      .get("https://mkonuk-intern-project.herokuapp.com/admin/events/")
      .then((response) => {
        this.setState({ events: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteUser(id) {
    axios
      .delete("https://mkonuk-intern-project.herokuapp.com/admin/users/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      users: this.state.users.filter((el) => el._id !== id),
    });
  }

  deleteEvent(id) {
    axios
      .delete("https://mkonuk-intern-project.herokuapp.com/admin/events/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      events: this.state.events.filter((el) => el._id !== id),
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
                  getUserDataFromDatabase={this.getUserDataFromDatabase}
                  getEventDataFromDatabase={this.getEventDataFromDatabase}
                  deleteUser={this.deleteUser}
                  deleteEvent={this.deleteEvent}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
