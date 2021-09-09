const express = require("express");
const users = require("./user.routes");
const events = require("./event.routes");

const router = express.Router();

router.use("/users", users);
router.use("/events", events);

module.exports = router;
