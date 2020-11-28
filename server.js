require("dotenv").config();

// DATABASE
const mongoose = require("mongoose");
const mongoUri = process.env.MONGODB_URI;

mongoose.connect(
  mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("mongodb connected")
);

// APP
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const authRoute = require("./routes/api/auth");
const postRoute = require("./routes/api/post");
const userRoute = require("./routes/api/user");

app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/user", userRoute);

const port = process.env.PORT;

app.listen(port, console.log(`express app running on port:${port}`));
