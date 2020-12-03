const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// should my type-sets be in an array? or leave as is?
const ExercisesSchema = new Schema({
  Exercises: [{
    type: {
      type: String,
      required: "type of exercise is required"
    },

    name: {
      type: String,
      required: "exercise name is Required"
    },

    duration: {
      type: Number,
      required: "length of workout is required"
    },

    weight: {
      type: Number,
    },

    reps: {
      type: Number,
    },

    sets: {
      type: Number,
    },
}],
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