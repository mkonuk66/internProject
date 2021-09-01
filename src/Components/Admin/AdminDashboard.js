import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminDashboard extends Component {
  render() {
    return (
      <div className="mt-5 ">
        <div className="container d-flex justify-content-center align-items-center  flex-column ">
          <h1 className="page-header  column">Admin Paneline Hoşgeldiniz !</h1>

          <p className="mt-3">Yapmak istediğiniz işlemi seçiniz.</p>
        </div>
        <br />
        <div className="container d-flex justify-content-center align-items-center flex-column ">
          <Link to="/adminUsers" class="btn btn-danger col-md-2 mt-3">
            Yöneticiler
          </Link>
          <Link to="/adminEvents" class="btn btn-danger col-md-2 mt-3">
            Etkinlinkler
          </Link>
          <Link to="/adminNews" class="btn btn-danger col-md-2 mt-3">
            Haberler
          </Link>
          <Link to="/adminNotices" class="btn btn-danger col-md-2 mt-3">
            Duyurular
          </Link>
          <Link to="/adminSlider" class="btn btn-danger col-md-2 mt-3">
            Slider
          </Link>
        </div>
      </div>
    );
  }
}
