import React, { Component } from "react";

export default class AdminLogin extends Component {
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

                    <form>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="userName"
                          placeholder="Lütfen kullanıcı adınızı giriniz"
                        />
                        <label htmlFor="userName">Kullanıcı Adı</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="userPassword"
                          placeholder="Lütfen şifrenizi giriniz"
                        />
                        <label htmlFor="userPassword">Şifre</label>
                      </div>

                      <div className="d-grid">
                        <a href="/adminPanel">
                          <button
                            type="button"
                            class="btn btn-outline-danger btn-lg btn-block"
                          >
                            Giriş Yap
                          </button>
                        </a>
                      </div>
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
