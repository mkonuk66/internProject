import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

let ckData = "";

export default class AdminNewEvents extends Component {
  handleSubmit(data) {
    const newEvent = {
      title: document.getElementById("eventTitle").value,
      createdAt: document.getElementById("eventDate").value,
      eventImage: document.getElementById("eventImage").value,
      content: ckData,
    };
    console.log(newEvent);
    axios
      .post(
        "https://mkonuk-intern-project.herokuapp.com/admin/events/newEvent",
        newEvent
      )
      .then(
        (res) => localStorage.clear(),

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
            <input type="file" className="form-control-file" id="eventImage" />
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
