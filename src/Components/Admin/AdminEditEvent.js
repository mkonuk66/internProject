import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

const getEventId = window.location.pathname.split("/");
const eventId = getEventId[2];
let ckData = "";

export default class AdminEditEvent extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeCreatedAt = this.onChangeCreatedAt.bind(this);
    this.onChangeEventImage = this.onChangeEventImage.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      createdAt: "",
      eventImage: "",
      content: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://mkonuk-intern-project.herokuapp.com/admin/events/" + eventId
      )
      .then((response) => {
        this.setState({
          title: response.data.title,
          createdAt: response.data.createdAt,
          eventImage: response.data.eventImage,
          content: response.data.content,
        });
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

  onChangeCreatedAt(e) {
    this.setState({
      createdAt: e.target.value,
    });
  }

  onChangeEventImage(e) {
    this.setState({
      eventImage: e.target.value,
    });
  }

  onChangeContent(e) {
    this.setState({
      content: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const updateEvent = {
      title: document.getElementById("eventTitle").value,
      createdAt: document.getElementById("eventDate").value,
      eventImage: document.getElementById("eventImage").value,
      content: ckData,
    };

    axios
      .post(
        "https://mkonuk-intern-project.herokuapp.com/admin/events/updateEvent/" +
          eventId,
        updateEvent
      )
      .then(
        (res) => window.open("/adminEvent", "_self"),
        alert("Etkinlik başarıyla güncellendi")
      )
      .catch((err) => alert(err));
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
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label className=" mb-1">Etkinlik Tarih</label>
            <input
              type="date"
              className="form-control"
              id="eventDate"
              placeholder="Etkinlik adını giriniz"
              value={this.state.createdAt}
              onChange={this.onChangeCreatedAt}
            />
          </div>
          <div className="form-group mt-4">
            <label className=" mb-1">Etkinlik Fotoğraf</label>
            <br />
            <input
              type="file"
              className="form-control-file"
              id="eventImage"
              onChange={this.onChangeEventImage}
            />
          </div>
          <div className="form-group mt-4">
            <div className="App">
              <label className=" mb-1">Etkinlik İçerik</label>
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
            <p
              type="submit "
              className="btn btn-warning mb-2 mt-5"
              onClick={this.onSubmit}
            >
              Etkinlik Güncelle
            </p>
          </div>
        </form>
      </div>
    );
  }
}
