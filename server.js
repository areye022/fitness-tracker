const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Routes

app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes.js"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workoutdb", 
{
  // necessary to fix all deprecation warnings!!
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});