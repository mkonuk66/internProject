const express = require("express");
const users = require("./user.routes");

const router = express.Router();

router.use("/users", users);

module.exports = router;
