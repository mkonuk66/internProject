import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

const getNewsId = window.location.pathname.split("/");
const newsId = getNewsId[2];

const DetailNews = (props) => (
  <div className="container d-flex justify-content-center align-items-center text-center flex-column mt-5 mb-5">
    <img
      src={
        props.news.newsImage.base64 === null
          ? "/images/news/1.jpg"
          : props.news.newsImage.base64
      }
      alt="notificationImage"
      className=" detailPageImage mb-3"
    />
    <h2 className="detailPageTitle">{props.news.title}</h2>

    <span className="detailPageDate">Haber Tarih : {props.news.newsDate}</span>
    <div className="detailPageText">
      {ReactHtmlParser(`${props.news.content}`)}
    </div>
    <a
      href="/news"
      className="btn btn-danger btn-lg d-inline justify-content-center"
    >
      Geri Dön
    </a>
  </div>
);

export default class NewsDetail extends Component {
  newsDetail() {
    return this.props.news.map((currentnews) => {
      if (currentnews._id === newsId) {
        return <DetailNews news={currentnews} key={currentnews._id} />;
      }
    });
  }
  render() {
    return (
      <div>
        {" "}
        <div className="pageDiv" />;{this.newsDetail()}
      </div>
    );
  }
}
