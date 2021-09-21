import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import FileBase64 from "react-file-base64";

const getNewsId = window.location.pathname.split("/");
const newsId = getNewsId[2];
let ckData = "";
let imagePath = "";

export default class AdminEditNews extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeNewsDate = this.onChangeNewsDate.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      createdAt: "",
      newsDate: "",
      newsImage: "",
      content: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://mkonuk-intern-site.herokuapp.com/admin/news/" + newsId)
      .then((response) => {
        this.setState({
          title: response.data.title,
          createdAt: response.data.createdAt,
          newsDate: response.data.newsDate,
          content: response.data.content,
        });
        imagePath = response.data.newsImage;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeNewsDate(e) {
    this.setState({
      newsDate: e.target.value,
    });
  }

  onChangeContent(e) {
    this.setState({
      content: e.target.value,
    });
  }

  getFiles(files) {
    imagePath = files;
  }

  onSubmit(e) {
    e.preventDefault();

    const updateNews = {
      title: document.getElementById("newsTitle").value,
      newsDate: document.getElementById("newsDate").value,
      createdAt: this.state.createdAt,
      newsImage: imagePath,
      content: ckData,
    };

    axios
      .post(
        "https://mkonuk-intern-site.herokuapp.com/admin/news/updateNews/" +
          newsId,
        updateNews
      )
      .then(
        (res) => window.open("/adminNews", "_self"),
        alert("Haber başarıyla güncellendi")
      )
      .catch((err) => alert(err));
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="container d-flex justify-content-center align-items-center column mb-5">
          <a
            href="/adminNews"
            className="  btn btn-warning  btn-lg m-5 mt-0 mb-0"
          >
            Geri Dön
          </a>{" "}
          <h2 className="d-flex justify-content-center display-2 m-5 mt-0 mb-0">
            Haberler Sayfası
          </h2>
        </div>
        <form>
          <div className="form-group">
            <label className="mb-1">Haber Adı</label>
            <input
              type="text"
              className="form-control"
              id="newsTitle"
              placeholder="Etkinlik adını giriniz"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label className=" mb-1">Haber Tarihi</label>
            <input
              type="date"
              className="form-control"
              id="newsDate"
              value={this.state.newsDate}
              onChange={this.onChangeNewsDate}
            />
          </div>
          <div className="form-group mt-4">
            <label className="mb-1">Haber Fotoğraf</label>
            <br />
            <FileBase64 multiple={false} onDone={this.getFiles.bind(this)} />
          </div>
          <div className="form-group mt-4">
            <div className="App">
              <label className="mb-1">Haber İçerik</label>
              <CKEditor
                editor={ClassicEditor}
                data={this.state.content}
                onBlur={(event, editor) => {
                  const rawData = JSON.stringify(editor.getData());
                  let process = rawData.split('"');
                  process.pop();
                  process.shift();
                  ckData = process.join(" ");
                }}
              />
            </div>
            <element class="btn btn-warning mb-2 mt-5" onClick={this.onSubmit}>
              Haber Güncelle
            </element>
          </div>
        </form>
      </div>
    );
  }
}
