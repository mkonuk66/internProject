const express = require("express");
const users = require("./user.routes");
const events = require("./event.routes");
const notifications = require("./notification.routes");
const news = require("./news.routes");
const sliders = require("./slider.routes");

const router = express.Router();

router.use("/users", users);
router.use("/events", events);
router.use("/notifications", notifications);
router.use("/news", news);
router.use("/sliders", sliders);

module.exports = router;
