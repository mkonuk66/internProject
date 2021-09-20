import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FileBase64 from "react-file-base64";
import axios from "axios";

let ckData = "";
let imagePath = "";
export default class AdminNewNews extends Component {
  getFiles(files) {
    imagePath = files;
  }

  handleSubmit() {
    let date = new Date();
    const newNews = {
      title: document.getElementById("newsTitle").value,
      createdAt: `${date.getDate()}.${
        date.getMonth() + 1
      }.${date.getFullYear()}`,
      newsDate: document.getElementById("newsDate").value,
      newsImage: imagePath,
      content: ckData,
    };
    console.log(newNews);
    axios
      .post(
        "https://mkonuk-intern-site.herokuapp.com/admin/news/newNews",
        newNews
      )
      .then(
        (res) => localStorage.clear(),
        alert("Haber Başarıyla Eklendi."),
        window.open("/adminNews", "_self")
      )
      .catch((err) => alert("Hata: " + err));
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
            />
          </div>
          <div className="form-group">
            <label className=" mb-1">Haber Tarihi</label>
            <input type="date" className="form-control" id="newsDate" />
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
                onBlur={(event, editor) => {
                  const rawData = JSON.stringify(editor.getData());
                  let process = rawData.split('"');
                  process.pop();
                  process.shift();
                  ckData = process.join(" ");
                }}
              />
            </div>
            <element
              class="btn btn-warning mb-2 mt-5"
              onClick={this.handleSubmit}
            >
              Haber Ekle
            </element>
          </div>
        </form>
      </div>
    );
  }
}
