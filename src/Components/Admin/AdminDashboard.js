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
          <Link to="/adminUser" className="btn btn-danger col-md-2 mt-3 btn-lg">
            Yöneticiler
          </Link>
          <Link
            to="/adminEvent"
            className="btn btn-danger col-md-2 mt-3 btn-lg"
          >
            Etkinlinkler
          </Link>
          <Link to="/adminNews" className="btn btn-danger col-md-2 mt-3 btn-lg">
            Haberler
          </Link>
          <Link
            to="/adminNotice"
            className="btn btn-danger col-md-2 mt-3 btn-lg"
          >
            Duyurular
          </Link>
          <Link
            to="/adminSlider"
            className="btn btn-danger col-md-2 mt-3 btn-lg"
          >
            Slider
          </Link>
        </div>
      </div>
    );
  }
}
