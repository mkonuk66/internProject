import React, { Component } from "react";
import AdminDashboard from "./AdminDashboard";
let currentUrl = "/admin";
export default class AdminLogin extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const adminId = "mEmin";
    const adminPassword = "yobu";
    const id = document.getElementById("userName").value;
    const password = document.getElementById("userPassword").value;
    if (adminId === id && adminPassword === password) {
      localStorage.clear();
      window.open("/adminDashboard", "_self");
    } else {
      alert("Hatalı kullanıcı adı veya şifre girdiniz");
      console.log(currentUrl);
      return currentUrl;
    }
  }
  render() {
    return (
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">
                      Yönetici Girişine Hoşgeldiniz !
                    </h3>

                    <form onSubmit={this.handleSubmit}>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="userName"
                          placeholder="Lütfen kullanıcı adınızı giriniz"
                        />
                        <label>Kullanıcı Adı</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="userPassword"
                          placeholder="Lütfen şifrenizi giriniz"
                        />
                        <label>Şifre</label>
                      </div>
                      <a>
                        <button
                          type="btn"
                          className="btn btn-outline-danger btn-lg btn-block"
                          onClick={this.handleSubmit}
                        >
                          Giriş Yap
                        </button>
                      </a>

                      <div className="d-grid"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const id = "mEmin";
// const pass = "yobü123";
// function loginControl(params) {
//   if (
//     id === document.getElementById("userName").value &&
//     pass === document.getElementById("userPassword").value
//   ) {
//     return <AdminDashboard />;
//   } else {
//     return <AdminLogin />;
//   }
// }
