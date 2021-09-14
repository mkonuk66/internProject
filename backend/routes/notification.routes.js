const router = require("express").Router();
let Notification = require("../models/notification.model");

router.route("/").get((req, res) => {
  Notification.find()
    .then((Notification) => res.json(Notification))
    .catch((err) => res.status(404).json("Error: " + err));
});

router.route("/newNotification").post((req, res) => {
  const title = req.body.title;
  const createdAt = req.body.createdAt;
  const noticeDate = req.body.noticeDate;
  const notificationImage = req.body.notificationImage;
  const content = req.body.content;

  const newNotification = new Notification({
    title,
    createdAt,
    noticeDate,
    notificationImage,
    content,
  });

  newNotification
    .save()
    .then(() => res.json("Notification added!"))
    .catch((err) => res.status(404).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Notification.findById(req.params.id)
    .then((Notification) => res.json(Notification))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Notification.findByIdAndDelete(req.params.id)
    .then(() => res.json("Notification deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/updateNotification/:id").post((req, res) => {
  Notification.findById(req.params.id)
    .then((notification) => {
      notification.title = req.body.title;
      notification.createdAt = req.body.createdAt;
      notification.notificationDate = req.body.notificationDate;
      notification.notificationImage = req.body.notificationImage;
      notification.content = req.body.content;

      notification
        .save()
        .then(() => res.json("Notification updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
