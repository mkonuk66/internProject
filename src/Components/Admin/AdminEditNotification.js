import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FileBase64 from "react-file-base64";
import axios from "axios";

const getNotificationId = window.location.pathname.split("/");
const notificationId = getNotificationId[2];
let ckData = "";
let imagePath = "";

export default class AdminEditNotification extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeNotificationDate = this.onChangeNotificationDate.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      createdAt: "",
      notificationDate: "",
      content: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://mkonuk-intern-site.herokuapp.com/admin/notifications/" +
          notificationId
      )
      .then((response) => {
        this.setState({
          title: response.data.title,
          createdAt: response.data.createdAt,
          notificationDate: response.data.notificationDate,
          content: response.data.content,
        });
        imagePath = response.data.notificationImage;
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

  onChangeNotificationDate(e) {
    this.setState({
      notificationDate: e.target.value,
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

    const updateNotification = {
      title: document.getElementById("notificationTitle").value,
      notificationDate: document.getElementById("notificationDate").value,
      createdAt: this.state.createdAt,
      notificationImage: imagePath,
      content: ckData,
    };
    console.log(updateNotification);
    axios
      .post(
        "https://mkonuk-intern-site.herokuapp.com/admin/notifications/updateNotification/" +
          notificationId,
        updateNotification
      )
      .then(
        (res) => window.open("/adminNotification", "_self"),
        alert("Duyuru başarıyla güncellendi")
      )
      .catch((err) => alert(err));
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="container d-flex justify-content-center align-items-center column mb-5">
          <a
            href="/adminNotification"
            className="btn btn-warning  btn-lg m-5 mt-0 mb-0"
          >
            Geri Dön
          </a>{" "}
          <h2 className="d-flex justify-content-center display-2 m-5 mt-0 mb-0">
            Duyurular Sayfası
          </h2>
        </div>
        <form>
          <div className="form-group">
            <label className=" mb-1">Duyuru Adı</label>
            <input
              type="text"
              className="form-control"
              id="notificationTitle"
              placeholder="Duyuru adını giriniz"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label className=" mb-1">Duyuru Tarih</label>
            <input
              type="date"
              className="form-control"
              id="notificationDate"
              placeholder="Duyuru adını giriniz"
              value={this.state.notificationDate}
              onChange={this.onChangeNotificationDate}
            />
          </div>
          <div className="form-group mt-4">
            <label className=" mb-1">Duyuru Fotoğraf</label>
            <br />
            <FileBase64 multiple={false} onDone={this.getFiles.bind(this)} />
          </div>
          <div className="form-group mt-4">
            <div className="App">
              <label className=" mb-1">Duyuru İçerik</label>
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
            <element
              className="btn btn-warning mb-2 mt-5"
              onClick={(e) => this.onSubmit(e)}
            >
              Duyuru Güncelle
            </element>
          </div>
        </form>
      </div>
    );
  }
}
