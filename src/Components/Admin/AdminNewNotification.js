import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default class AdminNewNotification extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="container d-flex justify-content-center align-items-center column mb-5">
          <a
            href="/adminNotification"
            className="  btn btn-warning  btn-lg m-5 mt-0 mb-0"
          >
            Geri Dön
          </a>
          <h2 className="d-flex justify-content-center display-2 m-5 mt-0 mb-0">
            Duyurular Sayfası
          </h2>
        </div>
        <form>
          <div className="form-group">
            <label className=" mb-1">Duyuru Başlık</label>

            <input
              type="email"
              className="form-control"
              id="notificationTitle"
              placeholder="Etkinlik adını giriniz"
              required
            />
          </div>
          <div className="form-group mt-4">
            <label className=" mb-1">Duyuru Fotoğraf</label>
            <br />
            <input
              type="file"
              className="form-control-file"
              id="notificationImage"
            />
          </div>
          <div className="form-group mt-4">
            <div className="App">
              <label className=" mb-1">Duyuru İçerik</label>
              <CKEditor
                required
                editor={ClassicEditor}
                onBlur={(event, editor) => {
                  const data = editor.getData();
                  const htmlData = JSON.stringify(data);
                  console.log(htmlData);
                }}
              />
            </div>
            <a href="/adminNotification" class="btn btn-warning mb-2 mt-5">
              Duyuru Ekle
            </a>
          </div>
        </form>
      </div>
    );
  }
}
