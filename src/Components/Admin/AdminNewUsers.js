import React, { Component } from "react";
import axios from "axios";

export default class AdminNewUsers extends Component {
  handleSubmit(e) {
    const newUser = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };
    console.log(newUser);
    axios
      .post(
        "https://mkonuk-intern-site.herokuapp.com/admin/users/newUser",
        newUser
      )
      .then((res) => console.log(res.data))
      .catch((err) => alert("Hata: " + err));
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="container d-flex justify-content-center align-items-center column mb-5">
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
        <form className="text-center">
          <div className="form-group mb-3">
            <label className="mb-1">Yönetici Kullanıcı Adı</label>
            <input
              type="email"
              className="form-control"
              id="username"
              placeholder="Yönetici kullanıcı adını giriniz"
            />
          </div>
          <div className="form-group">
            <label className="mb-1">Yönetici Şifre</label>
            <input
              type="email"
              className="form-control"
              id="password"
              placeholder="Yönetici şifre giriniz"
            />
          </div>
          <a
            href="/adminUser"
            className="btn btn-warning mb-2 mt-5"
            onClick={this.handleSubmit}
          >
            Yönetici Ekle
          </a>
        </form>
      </div>
    );
  }
}
