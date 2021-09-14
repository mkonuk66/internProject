const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config({ path: "./config/env/config.env" });

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const router = require("./routes/index");

app.use("/admin", router);
