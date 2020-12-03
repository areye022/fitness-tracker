const router = require("express").Router();
const Workout = require("../exerciseModel");

// route to create new workout
router.post("/api/workouts", ({body}, res) => { 
  Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

//   route to find workouts
router.get("api/workouts", ({ body }, res) => {
    Workout.find({})
    .sort({ date : -1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })

});

module.exports = router;