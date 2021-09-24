import React, { Component } from "react";
import FileBase64 from "react-file-base64";
import axios from "axios";

const getSliderId = window.location.pathname.split("/");
const sliderId = getSliderId[2];
let imagePath = "";

export default class AdminEditSlider extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      createdAt: "",
      updatedAt: "",
      sliderImage: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://mkonuk-intern-site.herokuapp.com/admin/sliders/" + sliderId)
      .then((response) => {
        this.setState({
          title: response.data.title,
          createdAt: response.data.createdAt,
          updatedAt: response.data.updatedAt,
        });
        imagePath = response.data.sliderImage;
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

  getFiles(files) {
    imagePath = files;
  }

  onSubmit(e) {
    e.preventDefault();
    let date = new Date();
    const updateSlider = {
      title: document.getElementById("sliderTitle").value,
      updatedAt: `${date.getDate()}.${
        date.getMonth() + 1
      }.${date.getFullYear()}`,
      createdAt: this.state.createdAt,
      sliderImage: imagePath,
    };
    console.log(updateSlider);
    axios
      .post(
        "https://mkonuk-intern-site.herokuapp.com/admin/sliders/updateSlider/" +
          sliderId,
        updateSlider
      )
      .then(
        (res) => window.open("/adminSlider", "_self"),
        alert("Slider başarıyla güncellendi")
      )
      .catch((err) => alert(err));
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="container d-flex justify-content-center align-items-center column mb-5">
          <a
            href="/adminSlider"
            className="btn btn-warning  btn-lg m-5 mt-0 mb-0"
          >
            Geri Dön
          </a>{" "}
          <h2 className="d-flex justify-content-center display-2 m-5 mt-0 mb-0">
            Duyurular Sayfası
          </h2>
        </div>
        <form>
          <div className="form-group mb-3">
            <label className="mb-1">Slider Başlık</label>
            <input
              type="text"
              className="form-control"
              id="sliderTitle"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group mt-4">
            <label className=" mb-1">Slider Fotoğraf</label>
            <br />
            <FileBase64 multiple={false} onDone={this.getFiles.bind(this)} />
          </div>
          <div>
            <element
              className="btn btn-warning mb-2 mt-5"
              onClick={(e) => this.onSubmit(e)}
            >
              Slider Güncelle
            </element>
          </div>
        </form>
      </div>
    );
  }
}
