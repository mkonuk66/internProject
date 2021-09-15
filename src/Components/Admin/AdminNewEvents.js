import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FileBase64 from "react-file-base64";
import axios from "axios";

let ckData = "";
let imagePath = "";
export default class AdminNewEvents extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
    };
  }
  getFiles(files) {
    this.setState({ files: files });
    imagePath = files;
  }
  handleSubmit() {
    let date = new Date();
    const newEvent = {
      title: document.getElementById("eventTitle").value,
      createdAt: `${date.getDate()}.${
        date.getMonth() + 1
      }.${date.getFullYear()}`,
      eventDate: document.getElementById("eventDate").value,
      eventImage: imagePath,
      content: ckData,
    };
    console.log(newEvent);
    axios
      .post("http://localhost:5000/admin/events/newEvent", newEvent)
      .then(
        (res) => localStorage.clear(),
        window.open("/adminEvent", "_self"),
        alert("Etkinlik Başarıyla Eklendi.")
      )
      .catch((err) => alert("Hata: " + err));
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="container d-flex justify-content-center align-items-center column mb-5">
          <a
            href="/adminEvent"
            className="btn btn-warning  btn-lg m-5 mt-0 mb-0"
          >
            Geri Dön
          </a>{" "}
          <h2 className="d-flex justify-content-center display-2 m-5 mt-0 mb-0">
            Etkinlikler Sayfası
          </h2>
        </div>
        <form>
          <div className="form-group">
            <label className=" mb-1">Etkinlik Adı</label>
            <input
              type="email"
              className="form-control"
              id="eventTitle"
              placeholder="Etkinlik adını giriniz"
            />
          </div>
          <div className="form-group">
            <label className=" mb-1">Etkinlik Tarih</label>
            <input type="date" className="form-control" id="eventDate" />
          </div>
          <div className="form-group mt-4">
            <label className=" mb-1">Etkinlik Fotoğraf</label>
            <br />
            <FileBase64 multiple={true} onDone={this.getFiles.bind(this)} />
          </div>
          <div className="form-group mt-4">
            <div className="App">
              <label className=" mb-1">Etkinlik İçerik</label>
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
            <p
              type="submit "
              className="btn btn-warning mb-2 mt-5"
              onClick={this.handleSubmit}
            >
              Etkinlik Ekle
            </p>
          </div>
        </form>
      </div>
    );
  }
}
