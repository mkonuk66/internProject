const express = require("express");
const users = require("./user.routes");
const events = require("./event.routes");
const notifications = require("./notification.routes");

const router = express.Router();

router.use("/users", users);
router.use("/events", events);
router.use("/notifications", notifications);

module.exports = router;
