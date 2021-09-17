const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  title: {
    type: String,
    required: "Boş Bırakılamaz",
  },
  createdAt: {
    type: String,
    required: "Boş Bırakılamaz",
  },
  newsDate: {
    type: String,
    required: "Boş Bırakılamaz",
  },
  newsImage: {
    type: Object,
  },
  content: {
    type: String,
    required: "Boş Bırakılamaz",
  },
});

module.exports = mongoose.model("News", NewsSchema);
