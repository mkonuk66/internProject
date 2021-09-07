import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Users = (props) => (
  <tr>
    <td>{props.users._id}</td>
    <td>{props.users.username}</td>
    <td>{props.users.password}</td>
    <td>
      <a href={"/adminUserEdit/" + props.users._id}>
        {" "}
        <i className="fa fa-pencil fa-2x adminIcon"></i>
      </a>
    </td>
    <td>
      <a
        onClick={() => {
          props.deleteUser(props.users._id);
        }}
      >
        {" "}
        <i className="fa fa-trash fa-2x adminIcon"></i>
      </a>
    </td>
  </tr>
);

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
    this.state = { users: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/admin/users/")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteUser(id) {
    axios.delete("http://localhost:5000/admin/users/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      users: this.state.users.filter((el) => el._id !== id),
    });
  }

  usersList() {
    return this.state.users.map((currentusers) => {
      return (
        <Users
          users={currentusers}
          key={currentusers._id}
          deleteUser={this.deleteUser}
        />
      );
    });
  }

  render() {
    return (
      <div className="container mt-5">
        <h2 className="d-flex justify-content-center display-2 mb-5">
          Yönetici Sayfası
        </h2>
        <Link
          to="/adminUserNew"
          className="container d-flex justify-content-center align-items-center btn btn-warning col-md-2 mb-5 btn-lg"
        >
          Yönetici Ekle
        </Link>
        <table className="table">
          <caption>Yöneticiler Listesi</caption>
          <thead>
            <tr>
              <th scope="col">Yönetici Id</th>
              <th scope="col">Kullanıcı Adı</th>
              <th scope="col">Şifre</th>
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
