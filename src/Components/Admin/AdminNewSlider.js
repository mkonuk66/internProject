import React, { Component } from "react";

export default class AdminNewSlider extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="container d-flex justify-content-center align-items-center column mb-5">
          <a
            href="/adminSlider"
            className="  btn btn-warning  btn-lg m-5 mt-0 mb-0"
          >
            Geri Dön
          </a>{" "}
          <h2 className="d-flex justify-content-center display-2 m-5 mt-0 mb-0">
            Slider Sayfası
          </h2>
        </div>
        <form>
          <div className="form-group mt-4">
            <label className=" mb-1">Slider Fotoğraf</label>
            <br />
            <input type="file" className="form-control-file" id="sliderImage" />
          </div>
          <a href="/adminSlider" class="btn btn-warning mb-2 mt-5">
            Slider Ekle
          </a>
        </form>
      </div>
    );
  }
}
