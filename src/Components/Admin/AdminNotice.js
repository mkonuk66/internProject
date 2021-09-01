import React, { Component } from "react";

export default class AdminNotice extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2 className="d-flex justify-content-center display-2 mb-5">
          Duyurular Sayfası
        </h2>
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
