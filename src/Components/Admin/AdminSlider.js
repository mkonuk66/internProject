import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminSlider extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2 className="d-flex justify-content-center display-2 mb-5">
          Slider Sayfası
        </h2>
        <Link
          to="/adminnewSlider"
          className="container d-flex justify-content-center align-items-center btn btn-warning col-md-2 mb-5 btn-lg"
        >
          Slider Ekle
        </Link>
        <table className="table">
          <caption>Slider Listesi</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Slider URL</th>
              <th scope="col">Güncelle</th>
              <th scope="col">Sil</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>./images/slider/1.webp</td>

              <td>
                <i class="fa fa-edit fa-2x"></i>
              </td>
              <td>
                <i class="fa fa-trash fa-2x"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>./images/slider/2.webp</td>

              <td>
                <i class="fa fa-edit fa-2x"></i>
              </td>
              <td>
                <i class="fa fa-trash fa-2x"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>./images/slider/3.webp</td>

              <td>
                <i class="fa fa-edit fa-2x"></i>
              </td>
              <td>
                <i class="fa fa-trash fa-2x"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>./images/slider/4.webp</td>

              <td>
                <i class="fa fa-edit fa-2x"></i>
              </td>
              <td>
                <i class="fa fa-trash fa-2x"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
