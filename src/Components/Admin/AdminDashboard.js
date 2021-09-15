import React, { Component } from "react";

export default class AdminDashboard extends Component {
  render() {
    return (
      <div className="mt-5 ">
        <div className="container d-flex justify-content-center align-items-center  flex-column ">
          <h1
            className="page-header column text-center"
            style={{ fontSize: "2rem" }}
          >
            Admin Paneline Hoşgeldiniz !
          </h1>

          <p className="mt-3">Yapmak istediğiniz işlemi seçiniz.</p>
        </div>
        <br />
        <div className="container d-flex justify-content-center align-items-center flex-column ">
          <a
            href="/adminUser"
            className="btn btn-warning col-md-2 mt-3 btn-lg adminDashboardButton"
          >
            Yöneticiler
          </a>
          <a
            href="/adminEvent"
            className="btn btn-warning col-md-2 mt-3 btn-lg adminDashboardButton"
          >
            Etkinlinkler
          </a>
          <a
            href="/adminNews"
            className="btn btn-warning col-md-2 mt-3 btn-lg adminDashboardButton"
          >
            Haberler
          </a>
          <a
            href="/adminNotification"
            className="btn btn-warning col-md-2 mt-3 btn-lg adminDashboardButton"
          >
            Duyurular
          </a>
          <a
            href="/adminSlider"
            className="btn btn-warning col-md-2 mt-3 btn-lg adminDashboardButton"
          >
            Slider
          </a>
          <a
            href="/"
            className="btn btn-danger col-md-2 mt-3 btn-lg adminDashboardButton mb-3"
          >
            Çıkış Yap
          </a>
        </div>
      </div>
    );
  }
}
