import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

const DetailNews = (props) => (
  <div className="newsCard">
    <figure className="newsCardThumb">
      <img
        src={
          props.news.newsImage.base64 === null
            ? ""
            : props.news.newsImage.base64
        }
        alt="newsImage"
        className="newsCardImage"
      />
      <figcaption className="newsCardCaption">
        <h2 className="newsCardTitle">{props.news.title}</h2>
        <p className="newsCardSnippet">
          {" "}
          {ReactHtmlParser(`${props.news.content}`)}
        </p>
        <a href={"/newsDetail/" + props.news._id} className="newsCardButton">
          Daha Fazlası
        </a>
      </figcaption>
    </figure>
  </div>
);

export default class News extends Component {
  newsList() {
    let sortedNews = []
      .concat(this.props.news)
      .sort((a, b) => (a.newsDate < b.newsDate ? 1 : -1));
    let lastIndex = sortedNews.length;
    return sortedNews.map((currentnews, i) => {
      if (lastIndex === i + lastIndex) {
        return <DetailNews news={currentnews} key={currentnews._id} />;
      } else if (lastIndex + 1 === i + lastIndex) {
        return <DetailNews news={currentnews} key={currentnews._id} />;
      } else if (lastIndex + 2 === i + lastIndex) {
        return <DetailNews news={currentnews} key={currentnews._id} />;
      }
    });
  }
  render() {
    return (
      <div>
        <h2 className="newsTitle">Haberler</h2>
        <div className="news">{this.newsList()}</div>

        <a href="/news" className="newsCardLink">
          <h2>Daha Fazlası</h2>
        </a>
      </div>
    );
  }
}
