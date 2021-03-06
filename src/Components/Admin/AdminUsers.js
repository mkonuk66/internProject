import React, { Component } from "react";
import { Link } from "react-router-dom";

const Users = (props) => (
  <tr>
    <td>{props.users._id}</td>
    <td>{props.users.name}</td>
    <td>{props.users.username}</td>
    <td>{props.users.password}</td>
    <td>
      <a href={"/adminUserEdit/" + props.users._id}>
        {" "}
        <i className="fa fa-pencil fa-2x adminIcon"></i>
      </a>
    </td>
    <td>
      <p
        onClick={() => {
          props.deleteUser(props.users._id);
          alert(props.users.username + " adlı yönetici silindi.");
        }}
      >
        {" "}
        <i className="fa fa-trash fa-2x adminIcon"></i>
      </p>
    </td>
  </tr>
);

export default class UserList extends Component {
  usersList() {
    return this.props.users.map((currentusers) => {
      return (
        <Users
          users={currentusers}
          key={currentusers._id}
          deleteUser={this.props.deleteUser}
        />
      );
    });
  }

  render() {
    return (
      <div className="container mt-5 ">
        <h2 className="d-flex justify-content-center display-2 m-5 mt-0 mb-0">
          Yönetici Sayfası
        </h2>
        <div className="container d-flex justify-content-center align-items-center mt-3 mb-4">
          <a href="/adminDashboard" className="btn btn-warning  btn-lg ">
            Geri Dön
          </a>{" "}
          <Link to="/adminUserNew" className="btn btn-warning  btn-lg m-3">
            Yönetici Ekle
          </Link>
        </div>

        <table className="table">
          <caption>Yöneticiler Listesi</caption>
          <thead>
            <tr>
              <th scope="col">Yönetici Id</th>
              <th scope="col">Yönetici Ad Soyad</th>
              <th scope="col">Yönetici Kullanıcı Adı</th>
              <th scope="col">Yönetici Şifresi</th>
              <th scope="col">Güncelle</th>
              <th scope="col">Sil</th>
            </tr>
          </thead>
          <tbody>{this.usersList()}</tbody>
        </table>
      </div>
    );
  }
}
