const router = require("express").Router();
let Slider = require("../models/slider.model");

router.route("/").get((req, res) => {
  Slider.find()
    .then((Slider) => res.json(Slider))
    .catch((err) => res.status(404).json("Error: " + err));
});

router.route("/newSlider").post((req, res) => {
  const title = req.body.title;
  const createdAt = req.body.createdAt;
  const updatedAt = req.body.updatedAt;
  const sliderImage = req.body.sliderImage;

  const newSlider = new Slider({
    title,
    createdAt,
    updatedAt,
    sliderImage,
  });

  newSlider
    .save()
    .then(() => res.json("Slider added!"))
    .catch((err) => res.status(404).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Slider.findById(req.params.id)
    .then((Slider) => res.json(Slider))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Slider.findByIdAndDelete(req.params.id)
    .then(() => res.json("Slider deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/updateSlider/:id").post((req, res) => {
  Slider.findById(req.params.id)
    .then((slider) => {
      slider.title = req.body.title;
      slider.createdAt = req.body.createdAt;
      slider.sliderImage = req.body.sliderImage;
      slider.updatedAt = req.body.updatedAt;

      slider
        .save()
        .then(() => res.json("Slider updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
