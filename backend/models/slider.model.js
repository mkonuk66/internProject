const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SliderSchema = new Schema({
  title: {
    type: String,
  },
  sliderImage: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  updatedAt: {
    type: String,
  },
});

module.exports = mongoose.model("Slider", SliderSchema);
