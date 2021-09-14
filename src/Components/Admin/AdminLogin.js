import React, { Component } from "react";

export default class AdminLogin extends Component {
  handleSubmit = (e) => {
    let userController = false;
    this.props.users.forEach((currentusers) => {
      if (
        currentusers.username === document.getElementById("userName").value &&
        currentusers.password === document.getElementById("userPassword").value
      ) {
        userController = true;
      }
    });

    if (userController) {
      localStorage.clear();
      window.open("/adminDashboard", "_self");
      this.props.onChangeAuthState(true);
      alert("Giriş Başarılı! Admin Paneline Yönlendiriliyorsunuz.");
    } else {
      localStorage.clear();
      window.open("/admin", "_self");
      this.props.onChangeAuthState(false);
      alert("Kullanıcı adı veya şifre hatalı!");
    }
  };

  render() {
    return (
      <div className="container-fluid ps-md-0 min-vh-100">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image ">
            <img
              src="https://i.ytimg.com/vi/BgTJj-ZZ13U/maxresdefault.jpg"
              className="img-fluid"
              alt="adminLoginImage"
            />
          </div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5 min-vh-100">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4 display-4">
                      Yönetici Girişine Hoşgeldiniz !
                    </h3>

                    <form onSubmit={this.handleSubmit}>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="userName"
                          required
                          placeholder="Lütfen kullanıcı adınızı giriniz"
                        />
                        <label>Kullanıcı Adı</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="userPassword"
                          required
                          placeholder="Lütfen şifrenizi giriniz"
                        />
                        <label>Şifre</label>
                      </div>
                      <p
                        type="btn"
                        className="btn btn-outline-danger btn-lg btn-block"
                        onClick={this.handleSubmit}
                      >
                        Giriş Yap
                      </p>

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
