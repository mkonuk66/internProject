import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminEvents extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2 className="d-flex justify-content-center display-2 mb-5">
          Etkinlikler Sayfası
        </h2>
        <Link
          to="/adminEventNew"
          className="container d-flex justify-content-center align-items-center btn btn-warning col-md-2 mb-5 btn-lg"
        >
          Etkinlik Ekle
        </Link>
        <table className="table">
          <caption>Etkinlikler Listesi</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Etkinlik Başlık</th>
              <th scope="col">Etkinlik Tarih</th>
              <th scope="col">Etkinlik İçerik</th>
              <th scope="col">Güncelle</th>
              <th scope="col">Sil</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Etkinlik 1</td>
              <td>1.09.2021</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>
                <i class="fa fa-edit fa-2x"></i>
              </td>
              <td>
                <i class="fa fa-trash fa-2x"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Etkinlik 2</td>
              <td>1.09.2021</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>
                <i class="fa fa-edit fa-2x"></i>
              </td>
              <td>
                <i class="fa fa-trash fa-2x"></i>
              </td>
            </tr>{" "}
            <tr>
              <th scope="row">3</th>
              <td>Etkinlik 3</td>
              <td>1.09.2021</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>
                <i class="fa fa-edit fa-2x"></i>
              </td>
              <td>
                <i class="fa fa-trash fa-2x"></i>
              </td>
            </tr>{" "}
            <tr>
              <th scope="row">4</th>
              <td>Etkinlik 4</td>
              <td>1.09.2021</td>
              <td>Lorem ipsum dolor sit amet.</td>
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
