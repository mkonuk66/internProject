import React, { Component } from "react";
import Nav from "./Navbar";
import Footer from "./Footer";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          {" "}
          <div className="pageDiv" />
          <div>
            {" "}
            <h4 className="d-flex justify-content-center mb-4 display-6">
              İletişim Formu
            </h4>
            <hr />
            <form>
              <div className="form-group">
                <label>Ad, Soyad</label>
                <input
                  type="email"
                  className="form-control"
                  id="eventTitle"
                  placeholder="Ad Soyad Giriniz."
                />
              </div>
              <div className="form-group">
                <label className=" mt-4">Mesaj Konusu</label>
                <input
                  type="text"
                  className="form-control"
                  id="eventDate"
                  placeholder="Mesajınızın Konusunu Giriniz"
                />
              </div>

              <div className="form-group mt-4">
                <div className="App">
                  <label className=" mb-1">Mesaj</label>
                  <br />
                  <textarea
                    className="form-control"
                    id="eventImage"
                    rows="3"
                    cols="50"
                    placeholder="Mesajınızı Giriniz"
                  />
                </div>
                <div className=" d-flex justify-content-center">
                  {" "}
                  <p className=" btn btn-warning btn-lg mt-5">Mesaj Gönder</p>
                </div>
              </div>
            </form>
          </div>
          <div className="d-flex justify-content-center flex-column align-items-center mt-5 mb-5">
            <h4 className="display-6">İletişim Bilgileri</h4>

            <div
              className=" flex-column text-center lead"
              style={{ width: "100%" }}
            >
              <hr />
              <p style={{ color: "red" }}>
                Telefon :{" "}
                <a
                  href="tel:03542178991"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <span>0 (354) 217 89 91</span>
                </a>
              </p>
              <p style={{ color: "red" }}>
                Faks :{" "}
                <a
                  href="tel:03542121193"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <span>0 (354) 212 11 93</span>
                </a>
              </p>
              <p style={{ color: "red" }}>
                E-Posta :{" "}
                <a
                  href="mailto:genel.sekreterlik@bozok.edu.tr"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <span>genel.sekreterlik@bozok.edu.tr</span>
                </a>
              </p>
              <p style={{ color: "red" }}>Rektörlük : </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d9981.732347475383!2d34.797648553967285!3d39.775843231050246!3m2!1i1024!2i768!4f13.1!5e1!3m2!1str!2str!4v1631260784666!5m2!1str!2str"
              style={{ width: "68rem", height: "40rem" }}
              allowfullscreen=""
              loading="lazy"
              title="iframe"
            ></iframe>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
