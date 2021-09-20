import React, { Component } from "react";

const News = (props) => (
  <tr>
    <td>{props.news._id}</td>
    <td>{props.news.title}</td>
    <td>{props.news.newsDate}</td>
    <td>
      <a href={"/adminNewsEdit/" + props.news._id}>
        {" "}
        <i className="fa fa-pencil fa-2x adminIcon"></i>
      </a>
    </td>
    <td>
      <a
        onClick={() => {
          props.deleteNews(props.news._id);
          alert(props.news.title + " adlı haber silindi.");
        }}
      >
        {" "}
        <i className="fa fa-trash fa-2x adminIcon"></i>
      </a>
    </td>
  </tr>
);

export default class AdminNews extends Component {
  newsList() {
    return this.props.news.map((currentnews) => {
      return (
        <News
          news={currentnews}
          key={currentnews._id}
          deleteNews={this.props.deleteNews}
        />
      );
    });
  }
  render() {
    return (
      <div className="container mt-5">
        <h2 className="d-flex justify-content-center display-2 mb-3">
          Haberler Sayfası
        </h2>
        <div className="container d-flex justify-content-center align-items-center column mb-4">
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
              <th scope="col">Haber Id</th>
              <th scope="col">Haber Başlık</th>
              <th scope="col">Haber Tarih</th>
              <th scope="col">Güncelle</th>
              <th scope="col">Sil</th>
            </tr>
          </thead>
          <tbody>{this.newsList()}</tbody>
        </table>
      </div>
    );
  }
}
