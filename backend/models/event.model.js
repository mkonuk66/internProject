const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
    required: "Boş Bırakılamaz",
    unique: true,
  },
  createdAt: {
    type: String,
    required: "Boş Bırakılamaz",
  },
  eventImage: {
    type: String,
  },
  content: {
    type: String,
    required: "Boş Bırakılamaz",
  },
});

module.exports = mongoose.model("Event", EventSchema);
