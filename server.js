// Add code to userModel.js to complete the model

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const Workout = require("./exerciseModel");

const PORT = process.env.PORT || 3000;

const User = require("./exerciseModel.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethoddb", { useNewUrlParser: true });

// Routes

app.use(require("./routes/htmlRoutes"));

// might moves this into its own route to reduce clutter
app.post("/submit", ({body}, res) => {
  const user = new Workout(body);
  // call methods here methods will be to 

  User.create(body)
    .then(dbUser => {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(err => {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});