const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
    required: "Boş Bırakılamaz",
  },
  createdAt: {
    type: String,
    required: "Boş Bırakılamaz",
  },
  eventDate: {
    type: String,
    required: "Boş Bırakılamaz",
  },
  eventImage: {
    type: Object,
  },
  content: {
    type: String,
    required: "Boş Bırakılamaz",
  },
});

module.exports = mongoose.model("Event", EventSchema);
