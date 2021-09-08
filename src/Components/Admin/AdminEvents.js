import React, { Component } from "react";

export default class AdminEvents extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2 className="d-flex justify-content-center display-2 mb-3">
          Etkinlikler Sayfası
        </h2>
        <div className="container d-flex justify-content-center align-items-center column mb-4">
          <a
            href="/adminDashboard"
            className="  btn btn-warning  btn-lg p-2 m-2 "
          >
            Geri Dön
          </a>
          <a href="/adminEventNew" className=" btn btn-warning  btn-lg p-2 m-2">
            Etkinlik Ekle
          </a>
        </div>
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
