import React, { Component } from "react";
import axios from "axios";

const Event = (props) => (
  <tr>
    <th scope="row">1</th>
    <td>{props.event._id}</td>
    <td>{props.event.title}</td>
    <td>{props.event.createdAt}</td>
    <td>
      <a href={"/adminEditEvent/" + props.event._id}>
        {" "}
        <i className="fa fa-pencil fa-2x adminIcon"></i>
      </a>
    </td>
    <td>
      <p
        onClick={() => {
          props.deleteEvent(props.event._id);
          alert(props.event.title + " başlıklı etkinlik silindi.");
        }}
      >
        {" "}
        <i className="fa fa-trash fa-2x adminIcon"></i>
      </p>
    </td>
  </tr>
);

export default class AdminEvents extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:5000/admin/events/")
      .then((response) => {
        this.setState({ event: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  eventList() {
    return this.props.event.map((currentevent) => {
      return (
        <Event
          event={currentevent}
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
