import React, { Component } from "react";
import FileBase64 from "react-file-base64";
import axios from "axios";

let imagePath = "";
export default class AdminNewSlider extends Component {
  getFiles(files) {
    imagePath = files;
  }
  handleSubmit(e) {
    let date = new Date();
    const newSlider = {
      title: document.getElementById("title").value,
      sliderImage: imagePath,
      createdAt: `${date.getDate()}.${
        date.getMonth() + 1
      }.${date.getFullYear()}`,
      updatedAt: `${date.getDate()}.${
        date.getMonth() + 1
      }.${date.getFullYear()}`,
    };
    console.log(newSlider);
    axios
      .post(
        "https://mkonuk-intern-site.herokuapp.com/admin/sliders/newSlider",
        newSlider
      )
      .then(
        (res) => console.log(res.data),
        alert("Slider başarıyla eklendi"),
        window.open("/adminSlider", "_self")
      )
      .catch((err) => alert("Hata: " + err));
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="container d-flex justify-content-center align-items-center column mb-5">
          <a
            href="/adminSlider"
            className="  btn btn-warning  btn-lg m-5 mt-0 mb-0"
          >
            Geri Dön
          </a>{" "}
          <h2 className="d-flex justify-content-center display-2 m-5 mt-0 mb-0">
            Slider Sayfası
          </h2>
        </div>
        <form>
          <div className="form-group mb-3">
            <label className="mb-1">Slider Başlık</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Slider başlık giriniz"
            />
          </div>
          <div className="form-group mt-4">
            <label className=" mb-1">Slider Fotoğraf</label>
            <br />
            <FileBase64 multiple={false} onDone={this.getFiles.bind(this)} />
          </div>
          <a href="/adminSlider" class="btn btn-warning mb-2 mt-5">
            Slider Ekle
          </a>
        </form>
      </div>
    );
  }
}
