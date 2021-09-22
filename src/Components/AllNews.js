import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

const AllNews = (props) => (
  <div>
    {" "}
    <div className="newsCard">
      <figure className="newsCardThumb">
        <img
          src={
            props.news.newsImage.base64 === null
              ? ""
              : props.news.newsImage.base64
          }
          width="300px"
          height="400px"
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
  </div>
);
const NewsSpace = (props) => (
  <div>
    <div className="newsCard">
      <figure className="newsCardThumb">
        <img
          src={
            props.news.newsImage.base64 === null
              ? ""
              : props.news.newsImage.base64
          }
          width="300px"
          height="400px"
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
    </div>{" "}
    <div className="newsCardSpace" />
  </div>
);

export default class News extends Component {
  newsList() {
    let sortedNews = []
      .concat(this.props.news)
      .sort((a, b) => (a.newsDate < b.newsDate ? 1 : -1));
    return sortedNews.map((currentnews, i) => {
      if (i % 4 === 0) {
        return <NewsSpace news={currentnews} key={currentnews._id} />;
      } else {
        return <AllNews news={currentnews} key={currentnews._id} />;
      }
    });
  }
  render() {
    return (
      <div>
        <div className="pageDiv"></div>
        <div>
          <h2 className="newsTitle">Haberler</h2>
          <div className="news ">
            {this.newsList()} <br />
          </div>
        </div>
      </div>
    );
  }
}
