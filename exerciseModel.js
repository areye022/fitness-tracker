const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
  name: {
    type: String,
    required: "workout name is Required"
  },

  duration: {
    type: Number,
    required: "length of workout is required"
  },

  weight: {
    type: Number,
    required: "weight used is Required"
  },

  reps: {
    type: Number,
    required: "number of reps is Required",
  },

  sets: {
    type: Number,
    required: "number of sets is required",
  },

  userCreated: {
    type: Date,
    default: Date.now
  }
});

// methods

// This creates our model from the above schema, using mongoose's model method
const Exercises = mongoose.model("Exercises", ExercisesSchema);

// Export the Exercises model
module.exports = Exercises;