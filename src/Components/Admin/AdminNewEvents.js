import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default class AdminNewEvents extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2 className="d-flex justify-content-center display-2 mb-5">
          Etkinlikler Sayfası
        </h2>
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
                  const data = editor.getData();
                  const htmlData = JSON.stringify(data);
                  console.log(htmlData);
                }}
              />
            </div>
            <button type="submit" class="btn btn-danger mb-2 mt-5">
              Etkinlik Ekle
            </button>
          </div>
        </form>
      </div>
    );
  }
}
