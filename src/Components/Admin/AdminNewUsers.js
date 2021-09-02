import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminNewUsers extends Component {
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
              id="userPassword"
              placeholder="Etkinlik adını giriniz"
            />
          </div>
          <Link to="/adminUser" class="btn btn-warning mb-2 mt-5">
            Yönetici Ekle
          </Link>
        </form>
      </div>
    );
  }
}
