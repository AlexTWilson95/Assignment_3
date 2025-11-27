const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");

// Middleware
function requireLogin(req, res, next) {
  if (!req.session.user) return res.redirect("/login");
  next();
}

// GET My workouts
router.get("/", requireLogin, async (req, res) => {
  const workouts = await Workout.find({ username: req.session.user.username });

  res.render("workouts", {
    title: "My Workouts",
    user: req.session.user,
    workouts
  });
});

// GET create form
router.get("/create", requireLogin, (req, res) => {
  res.render("createworkout", {
    title: "Create Workout",
    user: req.session.user,
    workout: null,
    action: "/workouts/create"
  });
});

// POST create
router.post("/create", requireLogin, async (req, res) => {
  const names = [].concat(req.body.exerciseName);
  const loads = [].concat(req.body.load);
  const sets = [].concat(req.body.timeOrSets);
  const infos = [].concat(req.body.info);

  const exercises = names.map((n, i) => ({
    exerciseName: n,
    load: loads[i],
    timeOrSets: sets[i],
    info: infos[i]
  }));

  await Workout.create({
    username: req.session.user.username,
    workoutName: req.body.workoutName,
    date: req.body.date,
    exercises
  });

  res.redirect("/workouts");
});

// GET edit page
router.get("/:id/edit", requireLogin, async (req, res) => {
  const workout = await Workout.findOne({
    _id: req.params.id,
    username: req.session.user.username
  });

  if (!workout) return res.redirect("/workouts");

  res.render("createworkout", {
    title: "Edit Workout",
    user: req.session.user,
    workout,
    action: `/workouts/${workout._id}/edit`
  });
});

// POST save edit
router.post("/:id/edit", requireLogin, async (req, res) => {
  const names = [].concat(req.body.exerciseName);
  const loads = [].concat(req.body.load);
  const sets = [].concat(req.body.timeOrSets);
  const infos = [].concat(req.body.info);

  const exercises = names.map((n, i) => ({
    exerciseName: n,
    load: loads[i],
    timeOrSets: sets[i],
    info: infos[i]
  }));

  await Workout.findByIdAndUpdate(req.params.id, {
    workoutName: req.body.workoutName,
    date: req.body.date,
    exercises
  });

  res.redirect("/workouts");
});

// View page
router.get("/:id", requireLogin, async (req, res) => {
  const workout = await Workout.findOne({
    _id: req.params.id,
    username: req.session.user.username
  });

  if (!workout) return res.redirect("/workouts");

  res.render("viewworkout", {
    title: workout.workoutName,
    user: req.session.user,
    workout
  });
});

// DELETE workout
router.delete("/:id", requireLogin, async (req, res) => {
  await Workout.findOneAndDelete({
    _id: req.params.id,
    username: req.session.user.username
  });

  res.redirect("/workouts");
});

module.exports = router;
