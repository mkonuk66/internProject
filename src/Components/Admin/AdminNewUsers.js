import React, { Component } from "react";
import axios from "axios";

export default class AdminNewUsers extends Component {
  handleSubmit(e) {
    const newUser = {
      name: document.getElementById("name").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };
    console.log(newUser);
    axios
      .post(
        "https://mkonuk-intern-site.herokuapp.com/admin/users/newUser",
        newUser
      )
      .then(
        (res) => console.log(res.data),
        alert("Yönetici başarıyla eklendi"),
        window.open("/adminUser", "_self")
      )
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
            <label className="mb-1">Yönetici Adı Soyadı</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Yönetici ad ve soyad giriniz"
            />
          </div>
          <div className="form-group mb-3">
            <label className="mb-1">Yönetici Kullanıcı Adı</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Yönetici kullanıcı adını giriniz"
            />
          </div>
          <div className="form-group">
            <label className="mb-1">Yönetici Şifre</label>
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="Yönetici şifre giriniz"
            />
          </div>
          <element
            className="btn btn-warning mb-2 mt-5"
            onClick={this.handleSubmit}
          >
            Yönetici Ekle
          </element>
        </form>
      </div>
    );
  }
}
