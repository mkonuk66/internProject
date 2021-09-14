import React, { Component } from "react";

export default class AdminNotification extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2 className="d-flex justify-content-center display-2 mb-3">
          Duyurular Sayfası
        </h2>
        <div className="container d-flex justify-content-center align-items-center column mb-4">
          <a
            href="/adminDashboard"
            className="  btn btn-warning  btn-lg p-2 m-2 "
          >
            Geri Dön
          </a>
          <a
            href="/adminNotificationNew"
            className=" btn btn-warning  btn-lg p-2 m-2"
          >
            Duyuru Ekle
          </a>
        </div>
        <table className="table">
          <caption>Duyurular Listesi</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Duyuru Başlık</th>
              <th scope="col">Duyuru İçerik</th>
              <th scope="col">Duyuru Tarih</th>
              <th scope="col">Güncelle</th>
              <th scope="col">Sil</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Duyuru 1</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>21.01.2015</td>
              <td>
                <i class="fa fa-edit fa-2x"></i>
              </td>
              <td>
                <i class="fa fa-trash fa-2x"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Duyuru 2</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>21.01.2015</td>
              <td>
                <i class="fa fa-edit fa-2x"></i>
              </td>
              <td>
                <i class="fa fa-trash fa-2x"></i>
              </td>
            </tr>{" "}
            <tr>
              <th scope="row">3</th>
              <td>Duyuru 3</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>21.01.2015</td>
              <td>
                <i class="fa fa-edit fa-2x"></i>
              </td>
              <td>
                <i class="fa fa-trash fa-2x"></i>
              </td>
            </tr>{" "}
            <tr>
              <th scope="row">4</th>
              <td>Duyuru 4</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>21.01.2015</td>
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
