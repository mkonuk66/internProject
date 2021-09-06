import React, { Component } from "react";

export default class AdminNews extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2 className="d-flex justify-content-center display-2 mb-5">
          Haberler Sayfası
        </h2>
        <div className="container d-flex justify-content-center align-items-center column mb-5">
          <a
            href="/adminDashboard"
            className="  btn btn-warning  btn-lg p-2 m-2 "
          >
            Geri Dön
          </a>
          <a href="/adminNewsNew" className=" btn btn-warning  btn-lg p-2 m-2">
            Haber Ekle
          </a>
        </div>
        <table className="table">
          <caption>Haberler Listesi</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Haber Fotoğraf</th>
              <th scope="col">Haber Başlık</th>
              <th scope="col">Haber İçerik</th>
              <th scope="col">Güncelle</th>
              <th scope="col">Sil</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>./images/news/1.jpg</td>
              <td>Haber 1</td>
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
              <td>./images/news/2.jpg</td>
              <td>Haber 2</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>
                <i class="fa fa-edit fa-2x"></i>
              </td>
              <td>
                <i class="fa fa-trash fa-2x"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>./images/news/3.jpg</td>
              <td>Haber 3</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>
                <i class="fa fa-edit fa-2x"></i>
              </td>
              <td>
                <i class="fa fa-trash fa-2x"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>./images/news/4.jpg</td>
              <td>Haber 4</td>
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
