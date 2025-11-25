const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  exerciseName: {
    type: String,
    required: true,
    trim: true
  },
  load: {
    type: Number,
    required: false
  },
  timeOrSets: {
    type: String,
    required: false,
    trim: true
  },
  info: {
    type: String,
    required: false,
    trim: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Workout", workoutSchema);
