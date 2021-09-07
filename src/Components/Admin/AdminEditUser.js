import React, { Component } from "react";
import axios from "axios";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/admin/users/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          password: response.data.password,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
    };

    console.log(user);

    axios
      .post(
        "http://localhost:5000/admin/users/updateUser/" +
          this.props.match.params.id,
        user
      )
      .then((res) => console.log(res.data));

    window.location = "/adminUser";
  }

  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        <h3>Edit Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              placeholder={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              placeholder={this.state.password + "a"}
              onChange={this.onChangePassword}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Edit Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
