import React, { Component } from "react";
import axios from "axios";

const getUserId = window.location.pathname.split("/");
const userId = getUserId[2];

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
      .get("http://localhost:5000/admin/users/" + userId)
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
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const changeUser = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    axios
      .post(
        "http://localhost:5000/admin/users/updateUser/" + userId,
        changeUser
      )
      .then(
        (res) => window.open("/adminUser", "_self"),
        alert("Kullanıcı başarıyla güncellendi")
      )
      .catch((err) => alert(err));
  }

  render() {
    return (
      <div className="container text-center mt-5">
        <div className="d-flex justify-content-center align-items-center column mb-5">
          <a
            href="/adminUser"
            className="  btn btn-warning  btn-lg m-5 mt-0 mb-0"
          >
            Geri Dön
          </a>{" "}
          <h2 className="d-flex justify-content-center display-2 m-5 mt-0 mb-0">
            Yönetici Sayfası
          </h2>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group mt-3">
            <label>Yönetici Kullanıcı Adı: </label>
            <input
              type="text"
              className="form-control"
              required
              id="username"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group mt-3 text-center">
            <label>Yönetici Şifre: </label>
            <input
              type="text"
              required
              className="form-control"
              id="password"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>

          <div className="form-group mt-4">
            <input
              type="submit"
              value="Güncelle"
              className="btn btn-warning  btn-lg"
            />
          </div>
        </form>
      </div>
    );
  }
}
