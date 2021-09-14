const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  title: {
    type: String,
    required: "Boş Bırakılamaz",
    unique: true,
  },
  createdAt: {
    type: String,
    required: "Boş Bırakılamaz",
  },
  noticeDate: {
    type: String,
  },
  notificationImage: {
    type: String,
  },
  content: {
    type: String,
    required: "Boş Bırakılamaz",
  },
});

module.exports = mongoose.model("Notification", NotificationSchema);
