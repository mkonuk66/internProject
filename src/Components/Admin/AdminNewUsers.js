import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class AdminNewUsers extends Component {
  handleSubmit(e) {
    const newUser = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };
    console.log(newUser);
    axios
      .post("http://localhost:5000/admin/users/newUser", newUser)
      .then((res) => console.log(res.data))
      .catch((err) => alert("Hata: " + err));
  }
  render() {
    return (
      <div className="container mt-5">
        <h2 className="d-flex justify-content-center display-2 mb-5">
          Yönetici Sayfası
        </h2>
        <form>
          <div className="form-group mb-3">
            <label className="mb-1">Yönetici Kullanıcı Adı</label>
            <input
              type="email"
              className="form-control"
              id="username"
              placeholder="Etkinlik adını giriniz"
            />
          </div>
          <div className="form-group">
            <label className="mb-1">Yönetici Şifre</label>
            <input
              type="email"
              className="form-control"
              id="password"
              placeholder="Etkinlik adını giriniz"
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
