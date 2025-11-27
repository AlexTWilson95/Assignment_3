const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  exerciseName: String,
  load: String,
  timeOrSets: String,
  info: String
});

const WorkoutSchema = new mongoose.Schema({
  username: String,

  workoutName: {
    type: String,
    required: true
  },
  // Single date for all rows
  date: String,

  // Array of rows (spreadsheet entries)
  exercises: [ExerciseSchema]
});

module.exports = mongoose.model("Workout", WorkoutSchema);


