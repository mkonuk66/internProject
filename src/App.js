import React, { Component } from "react";
import Routes from "./Route";
import axios from "axios";
import { Route, Switch, BrowserRouter } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.state = { users: [], event: [] };
  }

  componentDidMount() {
    this.getUserDataFromDatabase();
    this.getEventDataFromDatabase();
  }

  getUserDataFromDatabase() {
    axios
      .get("http://localhost:5000/admin/users/")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getEventDataFromDatabase() {
    axios
      .get("http://localhost:5000/admin/events/")
      .then((response) => {
        this.setState({ event: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteUser(id) {
    axios.delete("http://localhost:5000/admin/users/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      users: this.state.users.filter((el) => el._id !== id),
    });
  }

  deleteEvent(id) {
    axios
      .delete("http://localhost:5000/admin/events/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      event: this.state.event.filter((el) => el._id !== id),
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
                  event={this.state.event}
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
