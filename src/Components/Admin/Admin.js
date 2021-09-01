import React, { Component } from "react";

export default class Admin extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2 className="d-flex justify-content-center display-2 mb-5">
          Yönetici Sayfası
        </h2>
        <table className="table">
          <caption>Yöneticiler Listesi</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ad Soyad</th>
              <th scope="col">Kullanıcı Adı</th>
              <th scope="col">Şifre</th>
              <th scope="col">Güncelle</th>
              <th scope="col">Sil</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mehmet Emin KONUK</td>
              <td>mEmin</td>
              <td>yobu</td>
              <td>
                <i class="fa fa-edit fa-2x"></i>
              </td>
              <td>
                <i class="fa fa-trash fa-2x"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Mehmet Emin KONUK</td>
              <td>eKonuk</td>
              <td>yobu</td>
              <td>
                <i class="fa fa-edit fa-2x"></i>
              </td>
              <td>
                <i class="fa fa-trash fa-2x"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Mehmet Emin KONUK</td>
              <td>mKonuk</td>
              <td>yobu</td>
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
