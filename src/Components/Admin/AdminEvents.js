import React, { Component } from "react";

const Event = (props) => (
  <tr>
    <th scope="row">1</th>
    <td>{props.events._id}</td>
    <td>{props.events.title}</td>
    <td>{props.events.createdAt}</td>
    <td>
      <a href={"/adminEditEvent/" + props.events._id}>
        {" "}
        <i className="fa fa-pencil fa-2x adminIcon"></i>
      </a>
    </td>
    <td>
      <p
        onClick={() => {
          props.deleteEvent(props.events._id);
          alert(props.events.title + " başlıklı etkinlik silindi.");
        }}
      >
        {" "}
        <i className="fa fa-trash fa-2x adminIcon"></i>
      </p>
    </td>
  </tr>
);

export default class AdminEvents extends Component {
  eventList() {
    return this.props.events.map((currentevent) => {
      return (
        <Event
          events={currentevent}
          key={currentevent._id}
          deleteEvent={this.props.deleteEvent}
        />
      );
    });
  }
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
              <th scope="col">Etkinlik Id</th>
              <th scope="col">Etkinlik Başlık</th>
              <th scope="col">Etkinlik Tarih</th>
              <th scope="col">Güncelle</th>
              <th scope="col">Sil</th>
            </tr>
          </thead>
          <tbody>{this.eventList()}</tbody>
        </table>
      </div>
    );
  }
}
