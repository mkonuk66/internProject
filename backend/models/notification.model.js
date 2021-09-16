const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  title: {
    type: String,
    required: "Boş Bırakılamaz",
  },
  createdAt: {
    type: String,
    required: "Boş Bırakılamaz",
  },
  notificationDate: {
    type: String,
  },
  notificationImage: {
    type: Object,
  },
  content: {
    type: String,
    required: "Boş Bırakılamaz",
  },
});

module.exports = mongoose.model("Notification", NotificationSchema);
