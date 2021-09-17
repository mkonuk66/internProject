const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    required: "Boş Bırakılamaz",
    unique: true,
  },
  password: {
    type: String,
    required: "Boş Bırakılamaz",
  },
  isAuth: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
