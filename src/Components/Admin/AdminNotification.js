import React, { Component } from "react";

const Notification = (props) => (
  <tr>
    <th scope="row">1</th>
    <td>{props.notifications._id}</td>
    <td>{props.notifications.title}</td>
    <td>{props.notifications.notificationDate}</td>
    <td>
      <a href={"/adminEditNotification/" + props.notifications._id}>
        {" "}
        <i className="fa fa-pencil fa-2x adminIcon"></i>
      </a>
    </td>
    <td>
      <p
        onClick={() => {
          props.deleteNotification(props.notifications._id);
          alert(props.notifications.title + " başlıklı etkinlik silindi.");
        }}
      >
        {" "}
        <i className="fa fa-trash fa-2x adminIcon"></i>
      </p>
    </td>
  </tr>
);

export default class AdminNotification extends Component {
  notificationList() {
    return this.props.notifications.map((currentnotification) => {
      return (
        <Notification
          notifications={currentnotification}
          key={currentnotification._id}
          deleteNotification={this.props.deleteNotification}
        />
      );
    });
  }
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
              <th scope="col">Duyuru Id</th>
              <th scope="col">Duyuru Başlık</th>
              <th scope="col">Duyuru Tarih</th>
              <th scope="col">Güncelle</th>
              <th scope="col">Sil</th>
            </tr>
          </thead>
          <tbody>{this.notificationList()}</tbody>
        </table>
      </div>
    );
  }
}
