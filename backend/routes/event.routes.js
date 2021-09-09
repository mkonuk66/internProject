const router = require("express").Router();
let Event = require("../models/event.model");

router.route("/").get((req, res) => {
  Event.find()
    .then((Event) => res.json(Event))
    .catch((err) => res.status(404).json("Error: " + err));
});

router.route("/newEvent").post((req, res) => {
  const title = req.body.title;
  const createdAt = req.body.createdAt;
  const eventImage = req.body.eventImage;
  const content = req.body.content;

  const newEvent = new Event({
    title,
    createdAt,
    eventImage,
    content,
  });

  newEvent
    .save()
    .then(() => res.json("Event added!"))
    .catch((err) => res.status(404).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Event.findById(req.params.id)
    .then((Event) => res.json(Event))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.json("Event deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/updateEvent/:id").post((req, res) => {
  Event.findById(req.params.id)
    .then((event) => {
      event.title = req.body.title;
      event.createdAt = req.body.createdAt;
      event.eventImage = req.body.eventImage;
      event.content = req.body.content;

      event
        .save()
        .then(() => res.json("Event updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
