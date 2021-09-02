import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminNewSlider extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2 className="d-flex justify-content-center display-2 mb-5">
          Slider Sayfası
        </h2>
        <form>
          <div className="form-group mt-4">
            <label className=" mb-1">Slider Fotoğraf</label>
            <br />
            <input type="file" className="form-control-file" id="sliderImage" />
          </div>
          <Link to="/adminSlider" class="btn btn-warning mb-2 mt-5">
            Slider Ekle
          </Link>
        </form>
      </div>
    );
  }
}
